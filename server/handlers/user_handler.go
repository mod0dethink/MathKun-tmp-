package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {
	users := []string{"Alice", "Bob", "Sena"}
	c.JSON(http.StatusOK, gin.H{"users": users})
}

func SignUp(c *gin.Context) {
	// サインアップのロジックをここに実装予定

	c.JSON(http.StatusOK, gin.H{"message": "User signed up successfully"})
}

func Login(c *gin.Context) {
	// ログインのロジックをここに実装予定

	c.JSON(http.StatusOK, gin.H{"message": "User logged in successfully"})
}
