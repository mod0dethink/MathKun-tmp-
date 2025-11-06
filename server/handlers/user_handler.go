package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {
	users := []string{"Alice", "Bob", "Sena"}
	c.JSON(http.StatusOK, gin.H{"users": users})
}
