# .devcontainer/Dockerfile
FROM node:18

WORKDIR /workspace

RUN npm install -g nodemon

COPY package*.json ./
RUN npm install

CMD ["bash"]
