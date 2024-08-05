package server

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
)

func (s *FiberServer) RegisterFiberRoutes() {
	// s.App.Get("/health", s.healthHandler)

	if s.env == "dev" {
		// Proxy all other requests to the Vite dev server
		// The hmr websocket is running on a separate port,
		// we don't need to worry about it
		// s.App.Use(proxy.Balancer(proxy.Config{
		// 	Servers: []string{"http://localhost:5173"},
		// }))
	} else {
		s.App.Get("/*", filesystem.New(filesystem.Config{
			Root:         http.Dir("./frontend"),
			NotFoundFile: "index.html",
			Index:        "index.html",
			MaxAge:       24 * 3600,
			Next: func(c *fiber.Ctx) bool {
				fmt.Println("Next", c.OriginalURL())
				return strings.HasPrefix(c.Path(), "/api")
			},
		}))

		// any leftover requests should be logged
		s.App.Use(func(c *fiber.Ctx) error {
			fmt.Println("Unhandled request:", c.OriginalURL())
			return c.SendStatus(fiber.StatusNotFound)
		})

	}
}

func (s *FiberServer) healthHandler(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"status": "ok",
	})
}
