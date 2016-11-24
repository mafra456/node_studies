var app = require('./config/server');

// var rotaHome = require('./app/routes/index')
// rotaHome(app);

// var rotaNoticias = require('./app/routes/noticias')
// rotaNoticias(app);

// var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')
// rotaFormInclusaoNoticia(app);

app.listen(8888, function(){
    console.log("SERVER ON");
});

