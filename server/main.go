package main

import (
	"example.com/mathkun-tmp-/server/db"
	"example.com/mathkun-tmp-/server/models"
	"example.com/mathkun-tmp-/server/router"

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
	router.SetupRouter(r)
	r.Run(":8000")
}
