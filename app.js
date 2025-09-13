const express = require('express');
const app = express();
const Path = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname,'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', (req, res) => {

});

app.get('/read', (req, res) => {
    res.render('read');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});