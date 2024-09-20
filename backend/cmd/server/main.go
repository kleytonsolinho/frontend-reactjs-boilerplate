package main

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/kleytonsolinho/frontend-reactjs-boilerplate/backend/internal/infra/webserver/handlers"
)

func main() {
	r := chi.NewRouter()

	corsOptions := cors.Handler(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		AllowCredentials: true,
	})

	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(corsOptions)

	r.Post("/users", handlers.HomeHandler)

	fmt.Println("Server running on port 8080")
	http.ListenAndServe(":8080", r)
}
