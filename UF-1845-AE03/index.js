const express = require("express");
const app = express();
const port = 5000;
const helmet = require("helmet");
const morgan = require("morgan");

app.use(express.json());

app.use(helmet());
app.use(morgan());

const rutasRedSocial = require("./routes/rutas-redSocial");

app.use("/api/redSocial", rutasRedSocial);

app.listen(port, () => {
  console.log(`The server is listing through ${port}`);
});
