import numpy as np

def preprocess_image(img):
    # 0〜1に正規化して28x28x1に reshape
    img_array = np.array(img) / 255.0
    img_array = img_array.reshape(1,28,28,1)
    return img_array
