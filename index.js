var express = require('express');
var app = express();

app.use('/static', express.static(__dirname+'/static'));

app.listen(process.env.PORT || 80);