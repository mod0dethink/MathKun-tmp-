package handlers

import (
	"net/http"

	"example.com/mathkun-tmp-/server/db"
	"example.com/mathkun-tmp-/server/models"
	"golang.org/x/crypto/bcrypt"

	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {
	users := []string{"Alice", "Bob", "Sena"}
	c.JSON(http.StatusOK, gin.H{"users": users})
}

func SignUp(c *gin.Context) {
	// サインアップのロジックをここに実装予定
	var user models.User
	c.ShouldBindJSON(&user) // JSONデータをUser構造体にバインド

	// パスワードのハッシュ化
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	user.Password = string(hashedPassword)
	db.DB.Create(&user) // ユーザーをデータベースに保存(あとで変える)

	c.JSON(http.StatusOK, user)
}

func Login(c *gin.Context) {
	// ログインのロジックをここに実装予定

	c.JSON(http.StatusOK, gin.H{"message": "User logged in successfully"})
}
