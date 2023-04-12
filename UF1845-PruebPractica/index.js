const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const port = 5000;

app.use(express.json());
app.use(helmet());
app.use(morgan());

const rutasEver = require("./routes/rutas-4everWithu");

app.use("/api/everwithu", rutasEver);

app.listen(port, () => {
  console.log(`Server listing through ${port}`);
});
