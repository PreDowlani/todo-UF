const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

app.use(express.json());

//Creamos las rutas :
const rutaDisco = require("./routes/route-disco");
app.use("/api/discos", rutaDisco);

//creamos el MIDDLEWARE por si la ruta que eliga el cliente no existe:
app.use((req, res) => {
  res.status(404).json({
    mensaje: `No se ha encontrado la ruta..`,
  });
});

//Conectamos con el servidor primero para ver que todo arranca bien :

mongoose
  .connect(
    "mongodb+srv://Prashanth:Prashanth150492@cluster0.udzwxfp.mongodb.net/Uf1846Ae01?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => console.log(`Escuchando por el puerto ${port}`));
  })
  .catch((error) => console.log("Error al conectar con el serivdor" + error));
