# Проект: "Место" (react-mesto-api-full)
### Fullstack приложение, включающее фронтенд и бэкенд части приложения.

#### Функционал:
Интерактивная страница с регистрацией и авторизацией пользователей, куда после авторизации можно добавлять и удалять фотографии, ставить лайки, редактировать информацию профиля, менять аватар.

* сайт развернут в Yandex Cloud на Ubuntu 20.04 и доступен по адресу https://mesto.thirtyseven.nomoredomains.sbs
* API сайта расположено на том же сервере, по адресу https://apimesto.thirtyseven.nomoredomains.sbs

#### Технологии:
+ **Backend:**
  Node.js, Express, Cookie, CORS, MongoDB, mongoose, celebrate, helmet, express-rate-limit, escape-html, dotenv, bcryptjs, jsonwebtoken, winston, express-winston.
+ **Frontend:**
  React, JavaScript, HTML, CSS, БЭМ, Семантическая верстка, Адаптивная верстка.

#### Сайт создан на основе макетов, размещенных в Фигме:
* [Ссылка на 1-ю часть макета в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)
* [Ссылка на 2-ю часть макета в Figma](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1)
* [Ссылка на 3-ю часть макета в Figma](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1)
* [Ссылка на 4-ю часть макета в Figma](https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript.-Sprint-9?node-id=0%3A1)

#### Чеклисты для самопроверки:
* [Чеклист для самопроверки. 4 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-4.pdf)
* [Чеклист для самопроверки. 5 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-5.pdf)
* [Чеклист для самопроверки. 6 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-6.pdf)
* [Чеклист для самопроверки. 7 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-7.pdf)
* [Чеклист для самопроверки. 8 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-8.pdf)
* [Чеклист для самопроверки. 9 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-9.pdf)
* [Чеклист для самопроверки. 10 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-10.pdf)
* [Чеклист для самопроверки. 11 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-11.pdf)
* [Чеклист для самопроверки. 12 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-12.pdf)
* [Чеклист для самопроверки. 13 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist_13.pdf)
* [Чеклист для самопроверки. 14 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist_14.pdf)
* [Чеклист для самопроверки. 15 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist_15.pdf)

* * *

#### Краткая история развития проекта "Mesto":
- ["mesto"](https://github.com/UserGitHub37/mesto), написан на чистом JavaScript с использованием сборщика модулей Webpack

- ["mesto-react"](https://github.com/UserGitHub37/mesto-react), переписан с чистого JavaScript на React

- ["react-mesto-auth"](https://github.com/UserGitHub37/react-mesto-auth) дабавлено создание пользователей, их аутентификация и авторизация

- ["express-mesto-gha"](https://github.com/UserGitHub37/express-mesto-gha) написан backend для проекта "mesto"

- ["react-mesto-api-full"](https://github.com/UserGitHub37/react-mesto-api-full) fullstack приложение, включающее фронтенд и бэкенд части приложения

По мере развития проект обрастал дополнительным функционалом, подробное описание которого можно посмотреть в README.md соответствующих проектов.

* * *

#### Установка и запуск приложения на локальной машине:
(для работы приложения потребуется локально установленная база данных [MongoDB](https://www.mongodb.com/try/download/community) на дефолтном порту 27017)

1. Клонирование репозитория
```bash
git clone https://github.com/UserGitHub37/react-mesto-api-full.git
```

2. Через поиск вашего текстового редактора найдите в файле /frontend/src/utils/api.js и в файле /frontend/src/utils/apiAuth.js URL адрес https://apimesto.thirtyseven.nomoredomains.sbs и замените его на http://localhost:3000

3. Установка зависимостей (выполнить в папках frontend и backend)
```bash
npm install
```

4. Запустите dev-сервер бэкенда (выполнить в папке backend)
```bash
npm run dev
```

5. Запустите dev-сервер фронтенда (выполнить в папке frontend)
```bash
npm start
```
Приложение сообщит, что порт 3000 занят (бэкендом) и предложит запустить приложение на другом порту. Выберете Yes.
Произойдет запуск приложения с фронтендом в браузере.
Если проект не откроется автоматически, то откройте в браузере http://localhost:3001
