var http = require("http");

const server = http.createServer(function (request, response) {
    if (request.url == '/'){
        response.end('<h1>Inicio</h1>')
    }
    else if (request.url == '/contato'){
        response.end('<h1>Contato</h1>')
    }
    else if (request.url == '/sobre'){
        response.end('<h1>Sobre</h1>')
    }
    else{
        response.statusCode = 404;
        response.end('<h1>Not found!</h1>')
    }

})

server.listen(4000);

console.log('Servidor executando em localhost:4000/');
