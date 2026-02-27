const express = require("express");
const app = express();
const port = 3000;
const apiUrl = `http://localhost:${port}`;

const posts = [
  {
    id: 1,
    title: "Ciambellone della nonna",
    content:
      "Un classico soffice e profumato, perfetto a colazione o a merenda. Spolverata di zucchero a velo e via!",
    image: "/ciambellone.jpeg",
    tags: ["dolci", "colazione", "tradizione", "forno"],
  },
  {
    id: 2,
    title: "Cracker alla barbabietola",
    content:
      "Cracker croccanti e coloratissimi: la barbabietola dà gusto e un colore pazzesco. Ottimi con una salsa allo yogurt.",
    image: "/cracker_barbabietola.jpeg",
    tags: ["snack", "salato", "barbabietola", "vegetariano"],
  },
  {
    id: 3,
    title: "Pane fritto dolce",
    content:
      "Ricetta anti-spreco: pane raffermo, una passata in padella e zucchero. Semplice, veloce e super goloso.",
    image: "/pane_fritto_dolce.jpeg",
    tags: ["dolci", "anti-spreco", "veloce", "tradizione"],
  },
  {
    id: 4,
    title: "Pasta alla barbabietola e pistacchi",
    content:
      "Un primo piatto cremoso e originale: barbabietola per la crema, pistacchi per la croccantezza. Bellissima anche da vedere.",
    image: "/pasta_barbabietola.jpeg",
    tags: ["primi", "pasta", "barbabietola", "pistacchi"],
  },
  {
    id: 5,
    title: "Torta paesana",
    content:
      "Dolce rustico della tradizione: cacao, pane e frutta secca. Perfetto quando vuoi qualcosa di sostanzioso e profumato.",
    image: "/torta_paesana.jpeg",
    tags: ["dolci", "tradizione", "anti-spreco", "forno"],
  },
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({
    message: "Server del mio blog",
  });
});

app.get("/bacheca", (req, res) => {
  res.json({
    resultLength: posts.length,
    result: posts,
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${apiUrl}`);
});
