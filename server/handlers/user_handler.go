package handlers

import (
	"net/http"

	"example.com/mathkun-tmp-/server/db"
	"example.com/mathkun-tmp-/server/models"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
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
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), 10)
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
	var user models.User
	c.ShouldBindJSON(&user) // JSONデータをUser構造体にバインド
	var username string
	username = user.Username

	// Claims構造体の定義
	var Claims struct {
		Username string
		jwt.RegisteredClaims
	}

	// Claimsにユーザー情報をセット

	token, err ,:= jwt.CreateWithClaims(jwt.SigningMethodHS256,Claims)
	// jwtでToken発行
	c.JSON(http.StatusOK, gin.H{"message": "User logged in successfully"})

}
}