const express = require("express");
const cors = require("cors");

const conexion = require("./database/db");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.send("Backend funcionando");
});

// CONSULTA A MYSQL
app.get("/vehiculos", (req, res) => {

    const sql = "SELECT * FROM vehiculos";

    conexion.query(sql, (error, resultados) => {

        if (error) {
            console.error(error);
            return res.status(500).json({
                mensaje: "Error al consultar vehículos"
            });
        }

        res.json(resultados);

    });

});

app.get("/vehiculos/marca/:marca/paginado", (req, res) => {

    const marca = req.params.marca;

    const pagina = Number(req.query.pagina) || 1;
    const limite = Number(req.query.limite) || 6;

    const offset = (pagina - 1) * limite;

    const sql = `
        SELECT *
        FROM vehiculos
        WHERE marca = ?
        LIMIT ?
        OFFSET ?
    `;

    conexion.query(
        sql,
        [marca, limite, offset],
        (error, resultados) => {

            if(error){
                return res.status(500).json({
                    mensaje: "Error al consultar vehículos"
                });
            }

            res.json(resultados);

        }
    );

});


// detalle de vehiculo 
app.get("/vehiculo/:id", (req, res) => {

    const { id } = req.params;

    const sql = "SELECT * FROM vehiculos WHERE id = ?";

    conexion.query(sql, [id], (error, resultados) => {

        if (error) {
            return res.status(500).json({
                mensaje: "Error al consultar vehículo"
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensaje: "Vehículo no encontrado"
            });
        }

        res.json(resultados[0]);

    });

});

app.get("/vehiculos/marca/:marca/total", (req, res) => {

    const marca = req.params.marca;

    const sql = `
        SELECT COUNT(*) AS total
        FROM vehiculos
        WHERE marca = ?
    `;

    conexion.query(sql, [marca], (error, resultados) => {

        if(error){
            return res.status(500).json({
                mensaje: "Error al contar vehículos"
            });
        }

        res.json(resultados[0]);

    });

});

app.get("/vehiculos/:id/imagenes", (req, res) => {

    const id = req.params.id;

    const sql = `
        SELECT *
        FROM imagenes_vehiculo
        WHERE vehiculo_id = ?
    `;

    conexion.query(sql, [id], (error, resultados) => {

        if(error){
            return res.status(500).json({
                mensaje: "Error al obtener imágenes"
            });
        }

        res.json(resultados);

    });

});


// SIEMPRE AL FINAL
app.listen(3000, () => {
    console.log("Servidor iniciado en puerto 3000");
});