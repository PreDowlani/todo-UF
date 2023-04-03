const express = require("express");
const router = express.Router();
const Joi = require("joi");

//Ya creado la Base de Datos:
const redSocial = [
  {
    id: 1,
    nombre: "gavilanOpaloma",
    email: "gavopal@fotored.es",
    mensajes: ["zzz", "zzz"],
    conectado: false,
    seguidores: 33,
    siguiendo: 2,
    puntuacion: 5,
  },
  {
    id: 2,
    nombre: "fernando",
    email: "fernandoT@fotored.es",
    mensajes: [
      "Ex Futbolista en el Altelicto de Madrid",
      "Campeón del mundo en 2010",
    ],
    conectado: true,
    seguidores: 8500,
    siguiendo: 1500,
    puntuacion: 9,
  },
  {
    id: 3,
    nombre: "alonso",
    email: "ferAlF1@fotored.es",
    mensajes: [
      "Campeón del mundial de Fórmula 1 en 2005 y 2006",
      "Actualmente segundo mejor tiempo en el F1 en Australia",
    ],
    conectado: true,
    seguidores: 6950,
    siguiendo: 999,
    puntuacion: 10,
  },
  {
    id: 4,
    nombre: "rafa",
    email: "rafaNadalTennisPro@fotored.es",
    mensajes: [
      "Ocupa la quinta posición en la lista de jugadores con más títulos ATP ",
      "Es el cuarto tenista por cantidad de victorias en toda la historia",
    ],
    conectado: true,
    seguidores: 9500,
    siguiendo: 3850,
    puntuacion: 9,
  },
  {
    id: 5,
    nombre: "putin",
    email: "mrPutin@fotored.es",
    mensajes: ["Ucrania es Mia", "Voy a matar a todos"],
    conectado: false,
    seguidores: 15,
    siguiendo: 4999,
    puntuacion: 1,
  },
];

// Empezamos con la API :
// Usamos el get para ver todos los usuarios del array:
router.get("/", (req, res) => {
  res.send(redSocial);
});

// Recupera los datos en un usuario en base a su nombre :

router.get("/:nombre", (req, res, next) => {
  let nameUsuario = req.params.nombre;

  const usuario = redSocial.find((user) => {
    return user.nombre === nameUsuario;
  });
  if (!usuario) {
    res.status(404).send("Eror, Usuario con el nombre no encontrado");
  } else {
    res.status(200).send(usuario);
    next();
  }
});

// Crear un nuevo Usuario :

router.post("/", (req, res) => {
  const schema = Joi.object({
    nombre: Joi.string().min(6).max(25).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["es"] } })
      .required(),
    mensajes: Joi.array().items(Joi.string(), Joi.string()).required(),
    conectado: Joi.boolean().required(),
    seguidores: Joi.number().max(10000).required(),
    siguiendo: Joi.number().min(0).max(5000).required(),
    puntuacion: Joi.number().min(0).max(10).required(),
  });
  const validacion = schema.validate(req.body);
  if (validacion.error) {
    res.status(404).send(validacion.error.details[0].message);
    return;
  }
  const nuevoUsuario = {
    id: redSocial.length + 1,
    nombre: req.body.nombre,
    email: req.body.email,
    mensajes: req.body.mensajes,
    conectado: req.body.conectado,
    seguidores: req.body.seguidores,
    siguiendo: req.body.siguiendo,
    puntuacion: req.body.puntuacion,
  };

  redSocial.push(nuevoUsuario);
  res.status(200).send(redSocial);
});

//eliminar un usuario en base a su nombre :
router.delete("/:nombre", (req, res) => {
  let nameUsuario = req.params.nombre;
  const usuario = redSocial.find((user) => {
    return user.nombre === nameUsuario;
  });
  if (!usuario) {
    res.status(404).send("Usuario no encontrado");
  } else {
    const eliminar = redSocial.indexOf(usuario);
    redSocial.splice(eliminar, 1);
    res.status(200).send(redSocial);
  }
});

//añadir un nuevo mensaje al array de mensajes :

router.put("/:nombre", (req, res) => {
  //   const schema = Joi.object({
  //     mensajes: Joi.array().items(Joi.string(), Joi.string()).required(),
  //   });
  //   const validacion = schema.validate(req.body);
  //   if (validacion.error) {
  //     res.status(404).send(validacion.error.details[0].message);
  //     return;
  //   } //LO DEJO EN COMENTARIO , SI QUITO EL COMENTARIO TENGO QUE INSERTAR EL MENSAJE EN UN ARRAY .
  let nameUsuario = req.params.nombre;
  const usuario = redSocial.find((user) => {
    return user.nombre === nameUsuario;
  });
  if (!usuario) {
    res.status(404).send("Usuario no encontrado");
    return;
  } else {
    usuario.mensajes.push(req.body.mensajes);
    res.status(200).send(usuario);
  }
});

//cambiar el estado
router.put("/estado/:nombre", (req, res) => {
  let nameUsuario2 = req.params.nombre;
  const usuario2 = redSocial.find((user) => {
    return user.nombre === nameUsuario2;
  });
  if (!usuario2) {
    res.status(404).send("Usuario no encontrado");
    return;
  } else {
    // const estado = false;
    // usuario2.conectado = estado;
    // res.status(200).send(usuario2);
    if (usuario2.conectado === true) {
      usuario2.conectado = false;
    }
    res.send(usuario2);
  }
});

module.exports = router;
