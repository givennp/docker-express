const express = require("express")

const app = express()
const cors = require("cors")

app.use(cors());
app.use(express.json());

const PORT = 2020

app.get("/", (req, res) => {
  res.send("<h1>Pict perfect API</h1>");
});

app.listen(PORT, () => {
  console.log("Listening in port", PORT);
});