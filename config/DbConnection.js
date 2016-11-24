var mysql = require('mysql');
var ConnMySql= function(){
        console.log("Enviou requisição ao servidor");
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'portal_noticias'
        });
}

module.exports = function(){
    console.log("Realizou conexão com o módulo");
    return ConnMySql;
}