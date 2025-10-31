# app/utils.py
from PIL import Image
from torchvision import transforms
from PIL import Image
import numpy as np

def preprocess_image(img):
    # グレースケール化して28x28にリサイズ
    img = img.convert('L')  # Lはグレースケール
    img = img.resize((28,28))
    
    img_array = np.array(img)
    img_array = img_array.astype('float32') / 255.0  # 0-1に正規化
    img_array = img_array.reshape(1,28,28,1)  # モデル入力形状に合わせる
    return img_array