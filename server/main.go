package main

import (
	"example.com/mathkun-tmp-/server/db"
	"example.com/mathkun-tmp-/server/models"
	"example.com/mathkun-tmp-/server/router"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		panic("Failed to load .env file")
	}
}

func main() {
	db.Init()
	db.DB.AutoMigrate(&models.User{})
	r := gin.Default()
	config := cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}
	r.Use(cors.New(config))
	router.SetupRouter(r)
	r.Run(":8000")
}
