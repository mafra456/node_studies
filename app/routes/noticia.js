module.exports = function(app){
    app.get('/noticia',function(request, response){
        var connection = app.config.DbConnection();
        connection.query('select * from noticias where id_noticia = 1',function(error,result){
            console.log("Funcionou");
            response.render("noticias/noticia", {noticia: result});
        });
    });
}