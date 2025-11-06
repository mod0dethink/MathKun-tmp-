FROM golang:1.24.2-bookworm

# vscodeユーザーの作成
RUN groupadd --gid 1000 vscode \
    && useradd --uid 1000 --gid 1000 -m vscode \
    && apt-get update \
    && apt-get install -y sudo git \
    && echo vscode ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/vscode \
    && chmod 0440 /etc/sudoers.d/vscode

WORKDIR /usr/src/app

# go.mod 関連削除（まだモジュールなし）
COPY ./server ./server

RUN chown -R vscode:vscode /usr/src/app

USER vscode

CMD ["go", "run", "./server/main.go"]
