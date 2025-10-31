from flask import Flask
import torch
from .model import HandwritingCNN

def create_app():
    app = Flask(__name__)

    # モデルロード
    model = HandwritingCNN()
    model.load_state_dict(torch.load("models/emnist_cnn.pt", map_location="cpu"))
    model.eval()
    app.model = model  # app に保持

    from .routes import bp
    app.register_blueprint(bp)

    return app
