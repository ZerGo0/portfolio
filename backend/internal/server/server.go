package server

import (
	"fmt"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/etag"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/fiber/v2/middleware/requestid"

	"backend/internal/database"
)

type FiberServer struct {
	*fiber.App

	db  database.Service
	env string
}

func New() *FiberServer {

	server := &FiberServer{
		App: fiber.New(fiber.Config{
			AppName:      "backend",
			ReadTimeout:  30 * time.Second,
			WriteTimeout: 30 * time.Second,
			ErrorHandler: func(c *fiber.Ctx, err error) error {
				fmt.Println(err)
				return c.
					Status(fiber.StatusBadRequest).
					JSON(fiber.Map{"error": err.Error()})
			},
		}),

		db:  database.New(),
		env: os.Getenv("ENV"),
	}

	server.App.Use(logger.New(logger.Config{
		Format:        "[${time}] ${locals:requestid} ${status} - ${method} ${path}\n",
		DisableColors: true,
		Next: func(c *fiber.Ctx) bool {
			if c.Response().StatusCode() >= 200 && c.Response().StatusCode() <= 299 || c.Response().StatusCode() == fiber.StatusNotModified {
				return true
			}

			return false
		},
	}))

	server.App.Use(compress.New())
	server.App.Use(etag.New())
	server.App.Use(recover.New())
	server.App.Use(requestid.New())

	return server
}
