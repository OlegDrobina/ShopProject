Дизайн

Figma: https://www.figma.com/file/zL1Fipv9zA7FGLacFwnjaV/Rozetka-Admin-Panel?node-id=0%3A1&t=h1J3iZdKIgyYFVJN-0

Pixso: https://pixso.net/app/editor/lSiqEKxDmrj8ojsdEgnhkw?icon_type=1&page-id=0%3A1

User Stories

Login page
Відправка запиту на токен, отримання токену, зберігання токену (frontend + backend) або процес логінації чисто на стороні frontend (робите перевірку в компоненті + зберігаєте токен у localStorage)
логотип ока, яке буде показувати та приховувати пароль (при кліку показуєтьcя пароль та іконка змінюється на перекреслене око)
валідація, що два поля (логін і пароль) не є пусті
Products Table
Отримати список продуктів і замапити на UI ( таблиця )
Preview button - перекидає на Preview page
Add/Edit product
Відкриття модалки як"Edit Product" (але усі поля пусті і назва модального вікна - "Add product"), після додавання таблиця оновлюється. В модальному вікні для додавання можна зробити окреме поле для photo
Модальне вікно має відкриватись по середині сторінки, уся сторінка має отримати opacity (можна додати тінь модальному вікну).
Edit/Delete іконки відкривають модальні вікна Edit та Delete відповідно строки в якій викликаються
Product preview
Блоки (карточки) з продуктами з таблиці (сторінка Products table)
Відображається інформація з нового запита продуктів
Останню сторінку Product preview (праву частину, тобто детальну інформацію про продукт) робити не потрібно!

Додаткові requirements (вимоги)

Зробити у своєму репозиторії
Дані діставати зі свого серверу express.js або mock-api
Сортування полей у Products table - optional
Технології, які мають бути використані: Create React App (або Vite), React-router, React-final-form (або аналогічна бібліотека для форм), MUI (або аналогічна бібліотека з компонентами), Axios, Redux, Redux-saga (або Redux thunk), Eslint, Json-server (або NodeJS або mockapi)
