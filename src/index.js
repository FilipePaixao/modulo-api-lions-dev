import express from "express";

const app = express();

const port = 3000;

const logMiddleware = (req, res, next) => {
  const agora = new Date();
    
  const ano = agora.getFullYear();
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const dia = String(agora.getDate()).padStart(2, '0');
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  const ms = String(agora.getMilliseconds()).padStart(3, '0');

  const timestamp = `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}.${ms}`;
  const path = req.originalUrl;
  const method = req.method;

  console.log(`[${timestamp}] - (${method} ${path}) - passou por aqui`);

  next();
};

app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send(" Hello World ");
});

app.get("/users", (req, res) => {
  res.send("new users route");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});