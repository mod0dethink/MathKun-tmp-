# .devcontainer/Dockerfile
FROM node:18

WORKDIR /workspace

# グローバルツール（必要なら）
RUN npm install -g nodemon

# node_modulesをキャッシュしつつ開発用に置く
COPY package*.json ./
RUN npm install

# デフォルトコマンドは空にしておく（VSCode側で指定）
CMD ["bash"]
