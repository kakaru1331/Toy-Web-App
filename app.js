const express = require('express')
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome home!', message: 'Glad to meet you!' });
})

app.get('/board', (req, res) => {
  res.render('board/board-main');
});

app.listen(80, () => console.log('listening on port 80'));