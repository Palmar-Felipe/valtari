const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "789456femi",
    database: "valtari"
});

conexion.connect((error) => {

    if(error){
        console.log("Error de conexión:", error);
        return;
    }

    console.log("MySQL conectado");

});

module.exports = conexion;