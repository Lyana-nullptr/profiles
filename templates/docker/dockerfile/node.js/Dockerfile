# 请将该 Dockerfile 放在前端项目的根目录下
FROM node:20-alpine
LABEL authors="Lyana-nullptr"\
  description="基于 Node.js 20 构建的用于运行 Web 前端项目的镜像"

# 环境变量
ENV SERVER_PORT=8081

# 工作目录
WORKDIR /app

# 在 docker 环境中执行 npm install
COPY . .
RUN if [ -d "/app/node_modules" ]; then rm -rf /app/node_modules; fi && npm install

# 启动参数
EXPOSE ${SERVER_PORT}

ENTRYPOINT [ "npm", "run", "dev" ]
