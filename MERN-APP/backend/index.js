const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.get("/api/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Generating a random number between 1 and 100
  res.json({ random: randomNumber });
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is lisinting at ${PORT}`);
});

//http://localhost:4000/api/random
