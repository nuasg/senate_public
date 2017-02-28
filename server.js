const express = require('express');
const app = express();
app.use('//app',express.static(path.join(__dirname, "/app")));
app.set('views', path.join(__dirname, '/app'));
app.set('view engine', 'html');
app.get('/', function(req, res) {
    res.render('index.html');
});
app.listen("5006");