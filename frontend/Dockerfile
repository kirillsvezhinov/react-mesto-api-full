# Stage 1: Build React App
FROM node:18-alpine AS build
# Устанавливаем рабочую директорию
WORKDIR /front
# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./
# Устанавливаем зависимости
RUN yarn install
# Копируем остальные файлы приложения
COPY . .
# Собираем приложение
RUN yarn predeploy

# Stage 2: Deploy with Nginx
FROM nginx:1.25-alpine
# Удаляем стандартные настройки Nginx
RUN rm -rf /usr/share/nginx/html/*
# Копируем собранное приложение из Stage 1
COPY --from=build /front/build /usr/share/nginx/html
# Копируем пользовательский конфиг Nginx (опционально)
COPY --from=build /front/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Указываем порт, который будет использовать Nginx
EXPOSE 80
# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
