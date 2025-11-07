package router

import (
	"example.com/mathkun-tmp-/server/handlers"
	"github.com/gin-gonic/gin"
)

// 増えてきたらここでルーティングをまとめて他はわける
func SetupUserRoutes(r *gin.Engine) {
	r.GET("/users", handlers.GetUsers)
	r.POST("/signup", handlers.SignUp)
}
