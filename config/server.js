var express = require('express');
var consign = require('consign');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views') //sai do padrão de buscar no root e começa a buscar dentro da pasta views
consign()
    .include('app/routes')
    .then('config/DbConnection.js')
    .into(app);

module.exports = app;