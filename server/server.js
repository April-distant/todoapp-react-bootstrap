const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

// создаём путь до файла
const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
    // Express сам сетит нужные заголовок (text/plain или text/html),
    // поэтому их устанавливать не нужно.
    // Кодировки тоже определяются автоматически, кажется.
    // res.send('<h1>Hello world')
    res.sendFile(createPath('index'));
});

app.get('/contacts', (req, res) => {
    res.sendFile(createPath('contacts'));
});

app.get('/about-us', (req, res) => {
    res.redirect('/contacts');
});

// создаём middleware, который отлавливаем запросы не несуществующим путям
// Порядок роутов имеет значение - этот должен идти последним.
app.use((req, res) => {
    // можно написать так: res.statusCode = 404
    res
        .status(404)
        .sendFile(createPath('error'));
});