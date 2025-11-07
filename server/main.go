package main

import (
	"example.com/mathkun-tmp-/server/db"
	"example.com/mathkun-tmp-/server/models"
	"example.com/mathkun-tmp-/server/router"

	"github.com/gin-gonic/gin"
)

func main() {
	db.Init()
	db.DB.AutoMigrate(&models.User{})
	r := gin.Default()
	router.SetupRouter(r)
	r.Run(":8000")
}
