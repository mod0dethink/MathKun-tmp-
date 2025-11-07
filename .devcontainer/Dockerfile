FROM golang:1.24.2-bookworm

# vscodeユーザー作成
RUN groupadd --gid 1000 vscode \
    && useradd --uid 1000 --gid 1000 -m vscode \
    && apt-get update \
    && apt-get install -y sudo git \
    && echo vscode ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/vscode \
    && chmod 0440 /etc/sudoers.d/vscode

WORKDIR /workspaces

COPY server/go.mod .
COPY server/go.sum .

RUN chown -R vscode:vscode /workspaces

USER vscode

CMD ["bash"]
