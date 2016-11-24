module.exports = function(app){
    app.get('/noticias',function(request, response){
        var connection = app.config.DbConnection();
        connection.query('select * from noticias',function(error,result){
            console.log("Funcionou");
            response.render("noticias/noticias", {noticias: result});
        });
    });
}