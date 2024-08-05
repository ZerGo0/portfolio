package server

import (
	"os"

	"github.com/gofiber/fiber/v2"

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
			AppName: "backend",
		}),

		db:  database.New(),
		env: os.Getenv("ENV"),
	}

	return server
}
