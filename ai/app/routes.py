from flask import Blueprint, request, jsonify, current_app
from PIL import Image
import io
import torch
from .utils import preprocess_image

bp = Blueprint('bp', __name__)

@bp.route("/predict", methods=["POST"])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"}), 400

    file = request.files['image']
    img = Image.open(file.stream).convert('L')  # モノクロに変換
    tensor = preprocess_image(img)

    with torch.no_grad():
        output = current_app.model(tensor)  # current_app からモデルを取得
        prediction = output.argmax(dim=1).item()

    return jsonify({"prediction": prediction})
