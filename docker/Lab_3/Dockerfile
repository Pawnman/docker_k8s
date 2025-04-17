# Сборка Node.js-приложения
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --production

# Копируем исходный код
COPY . .

# Финальный образ
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/src ./src
COPY --from=builder /app/node_modules ./node_modules

CMD ["node", "src/index.js"]