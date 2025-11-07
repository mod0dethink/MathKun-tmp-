package router

import (
	"github.com/gin-gonic/gin"
)

// 増えてきたらここでルーティングをまとめて他はわける
func SetupRouter(r *gin.Engine) {
	SetupUserRoutes(r)
}
