var express = require ('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('/home/ubuntu/homepage/views'));


app.get('/comics', function(req,res){
	res.render('pages/comics');
});

app.get('/comics/*', function(req, res){
	res.render('pages/comics');
});

var server = app.listen(8000, function(){
	console.log('Listening on port 8000');
});
