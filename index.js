var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

const APP_TOKEN = 'EAAUzCXmKLVwBAApW0gINvhNjH4sIwsLh8xMPFzd1izaPUvXnok9EL1MswJkvyXZBofiKIjL40rOrwmUmxbkxxT37KaHqC7yuH0P8qPlrOsRNUsLQ1pdsl9ZCxjfn92GHBRiIZBeAopi4d2S0xMxBJ9ZASrbstqv5IZBmJhZCj3FflC3MkUoc9w';

var app = express();
app.use(bodyParser.json());

app.listen(3000, function(){
    console.log("El servidor se encuentra en el puerto 3000 y está corriendo correctamente");
})

app.get('/', function(req, res){
    res.send('Bienvenido al Bot ms1');
});


app.get('/webhook', function(req, res){

    if(req.query['hub.verify_token'] == 'test_token_say_he'){
        res.send(req.query['hub.challenge']);
    }else{
        res.send('Tu no tienes el token para entrar al servidor')
    }

});

app.post('/webhook', function(req, res){
    var data = req.body;
    console.log(data);
});
