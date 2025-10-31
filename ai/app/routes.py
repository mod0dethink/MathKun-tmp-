from flask import Blueprint, request, jsonify
import torch
import numpy as np

bp = Blueprint('main', __name__)

@bp.route("/predict", methods=["POST"])
def predict():
    # 画像データを JSON で受け取る（28x28 のグレースケールを仮定）
    data = request.json
    img_array = np.array(data['image'], dtype=np.float32)  # list -> np.array
    img_tensor = torch.tensor(img_array).unsqueeze(0).unsqueeze(0)  # [B, C, H, W]

    with torch.no_grad():
        output = bp.model(img_tensor)
        pred = output.argmax(dim=1).item()

    return jsonify({"prediction": pred})
