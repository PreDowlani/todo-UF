const express = require("express");
const Joi = require("joi");
const router = express.Router();

const everWithU = [
  {
    id: 1,
    nombre: "Doggystyle",
    grupoOsolista: "Snoop Doggy Dogg",
    estiloMusical: "Hip-Hop",
    fechaDeLanzamiento: "15-02-1993",
    ventas: 5000,
  },
  {
    id: 2,
    nombre: "Get Ricg or Die Tryin",
    grupoOsolista: "50 Cent",
    estiloMusical: "Rap",
    fechaDeLanzamiento: "12-25-2003",
    ventas: 9000,
  },
  {
    id: 3,
    nombre: "Millennium",
    grupoOsolista: "The BackStreet Boys",
    estiloMusical: "Pop",
    fechaDeLanzamiento: "06-15-1999",
    ventas: 8000,
  },
  {
    id: 4,
    nombre: "The Slim Shaddy",
    grupoOsolista: "Eminem",
    estiloMusical: "Rap",
    fechaDeLanzamiento: "01-01-1999",
    ventas: 15000,
  },
  {
    id: 5,
    nombre: "Love",
    grupoOsolista: "The Beatles",
    estiloMusical: "Rock",
    fechaDeLanzamiento: "10-08-2006",
    ventas: 13000,
  },
];

// -	Listar todos los proyectos
router.get("/", (req, res) => {
  res.send(everWithU);
});

// -	Listar un proyecto concreto en base a su id
router.get("/:id", (req, res) => {
  const idEver = Number(req.params.id);
  const findEver = everWithU.find((ever) => {
    return ever.id === idEver;
  });
  if (!findEver) {
    res.status(404).send("Id no encontrado..");
  } else {
    res.status(200).send(findEver);
  }
});
// -	Crear un nuevo proyecto
router.post("/", (req, res) => {
  const schema = Joi.object({
    nombre: Joi.string().min(4).required(),
    grupoOsolista: Joi.string().min(4).max(20).required(),
    estiloMusical: Joi.string().required(),
    fechaDeLanzamiento: Joi.date().greater("01-01-1990").required(),
    ventas: Joi.number().min(100).max(20000).required(),
  });
  const validacion = schema.validate(req.body);
  if (validacion.error) {
    res.status(404).send(validacion.error.details[0].message);
    return;
  }
  const nuevoLanzamiento = {
    id: everWithU.length + 1,
    nombre: req.body.nombre,
    grupoOsolista: req.body.grupoOsolista,
    estiloMusical: req.body.estiloMusical,
    fechaDeLanzamiento: req.body.fechaDeLanzamiento,
    ventas: req.body.ventas,
  };
  everWithU.push(nuevoLanzamiento);
  res.status(200).send(everWithU);
});

// router.put("/:id", (req, res) => {
//   const idEver = Number(req.params.id);
//   const findEver = everWithU.find((ever) => {
//     return ever.id === idEver;
//   });
//   if (!findEver) {
//     res.status(404).send("No se puede editar dicho usuario");
//   } else {
//     findEver.nombre = req.body.nombre;
//     findEver.grupoOsolista = req.body.grupoOsolista;
//     findEver.estiloMusical = req.body.estiloMusical;
//     findEver.fechaDeLanzamiento = req.body.fechaDeLanzamiento;
//     findEver.ventas = req.body.ventas;

//     res.status(200).send(findEver);
//   }
// });

//-	Modificar la fecha de un proyecto en base a su nombre
router.put("/fechadelanzamiento/:nombre", (req, res) => {
  const schema = Joi.object({
    fechaDeLanzamiento: Joi.date().greater("01-01-1990").required(),
  });
  const validacion = schema.validate(req.body);
  if (validacion.error) {
    res.status(404).send(validacion.error.details[0].message);
    return;
  }
  const nombre = req.params.nombre;
  const findNombre = everWithU.find((ever) => {
    return ever.nombre === nombre;
  });
  if (!findNombre) {
    res.status(404).send("No se puede editar dicho usuario");
  } else {
    findNombre.fechaDeLanzamiento = req.body.fechaDeLanzamiento;

    res.status(200).send(findNombre);
  }
});

//-	Modificar el valor total de las ventas en base a su nombre
router.put("/ventas/:nombre", (req, res) => {
  const schema = Joi.object({
    ventas: Joi.number().min(100).max(20000).required(),
  });
  const validacion = schema.validate(req.body);
  if (validacion.error) {
    res.status(404).send(validacion.error.details[0].message);
    return;
  }
  const nombre = req.params.nombre;
  const findNombre = everWithU.find((ever) => {
    return ever.nombre === nombre;
  });
  if (!findNombre) {
    res.status(404).send("No se puede editar dicho usuario");
  } else {
    findNombre.ventas = req.body.ventas;
    res.status(200).send(findNombre);
  }
});

// Eliminar un proyecto en base a su id
router.delete("/:id", (req, res) => {
  const idEver = Number(req.params.id);
  const findEver = everWithU.find((ever) => {
    return ever.id === idEver;
  });
  if (!findEver) {
    res.status(404).send("No se puede editar dicho usuario");
  } else {
    const eliminar = everWithU.indexOf(findEver);
    everWithU.splice(eliminar, 1);
    res.status(200).send(everWithU);
  }
});

module.exports = router;
