const express = require("express");
const router = express.Router();

const Disco = require("../model/model-disco");

//Empezamos a hacer el CRUD :

//Listar todos los proyestos:
router.get("/", async (req, res, next) => {
  let disco;
  try {
    disco = await Disco.find({});
  } catch (error) {
    res.status(404).json({
      mensaje: `Error en recopilar datos`,
      error: error.messaje,
    });
    return next(error);
  }
  res.status(200).json({
    mensaje: `Lista de los datos pedidos`,
    disco: disco,
  });
});
//Listar un proyecto concereto ( por su nombre );
router.get("/:nombre", async (req, res, next) => {
  let nombreDisco = req.params.nombre;
  let discoNombre;
  try {
    discoNombre = await Disco.findOne({ nombre: nombreDisco });
  } catch (err) {
    res.status(500).json({
      mensaje: "No se puede mostrar el usuario",
      error: err.messaje,
    });
    return next(err);
  }
  res.status(200).json({
    mensaje: `Mostrando usuario selecionado`,
    usuario: discoNombre,
  });
});

// Creamos los 5 usuarios primero para añadir al atlas :
router.post("/", async (req, res, next) => {
  const nuevoDisco = new Disco({
    nombre: req.body.nombre,
    grupoosol: req.body.grupoosol,
    estilo: req.body.estilo,
    fecha: req.body.fecha,
    ventas: req.body.ventas,
  });
  try {
    await nuevoDisco.save();
  } catch (error) {
    res.status(404).json({
      mensaje: `Problemas al crear nuevo usuario`,
      error: error.messaje,
    });
    return next(error);
  }
  res.status(200).json({
    mensaje: `Usuario creado con éxito`,
    usuario: nuevoDisco,
  });
});

//-	Modificación del estilo musical en función del nombre del proyecto
router.put("/estilo/:nombre", async (req, res, next) => {
  let cambioEstio = req.body;
  let nombreDisco = req.params.nombre;
  let estiloDisco;
  try {
    estiloDisco = await Disco.findOneAndUpdate(
      { nombre: nombreDisco },
      cambioEstio,
      {
        estilo: req.body.estilo,
        new: true,
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(500).json({
      mensaje: `No se ha podido modifcar el estilo`,
      error: error.messaje,
    });
    return next(error);
  }
  res.status(200).json({
    mensaje: `Estilo modificado con éxito`,
    estio: estiloDisco,
  });
});

// -	Modificación de la fecha de lanzamiento en función del nombre del proyecto.
router.put("/fecha/:nombre", async (req, res, next) => {
  let cambiarFecha = req.body;
  let nombreDisco = req.params.nombre;
  let editarFecha;
  try {
    editarFecha = await Disco.findOneAndUpdate(
      { nombre: nombreDisco },
      cambiarFecha,
      {
        fecha: req.body.fecha,
        new: true,
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(500).json({
      mensaje: `No se ha podido modifica la fecha`,
      error: error.messaje,
    });
    return next(error);
  }
  res.status(200).json({
    mensaje: "Se ha modificado la fecha correctamente",
    nuevaFecha: editarFecha,
  });
});

// -	Eliminación de un proyecto en base a su id.
router.delete("/:id", async (req, res, next) => {
  let idDisco = req.params.id;
  let eliminarDisco;
  try {
    eliminarDisco = await Disco.findByIdAndDelete(idDisco);
  } catch (err) {
    res.status(404).json({
      mensaje: `No se puede eliminar el usuario`,
      error: err.messaje,
    });
    return next(err);
  }
  res.status(200).json({
    mensaje: `Usuario eliminado`,
    eliminado: eliminarDisco,
  });
});

module.exports = router;
