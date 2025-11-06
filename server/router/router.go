package router

import (
	"example.com/mathkun-tmp-/server/handlers"
	"github.com/gin-gonic/gin"
)

// 増えてきたらここでルーティングをまとめて他はわける
func SetupRouter(r *gin.Engine) {
	r.GET("/users", handlers.GetUsers)
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello from Gin!",
		})
	})
}
