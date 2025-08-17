const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  // Add more quotes as desired
];

// Endpoint to return all quotes as an array
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
