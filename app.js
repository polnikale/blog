const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/src'));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render("home", {
    person: {
      name: 'xd',
    },
  });
})
app.get('/home', (req,res) => {
  res.send('xd');
})

module.exports = app;