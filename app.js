const express = require("express");
const app = express();
const port = 3000;
const apiUrl = `http://localhost:${port}`;

const posts = [
  {
    id: 1,
    title: "Grandma's Ciambellone",
    content:
      "A soft and fragrant classic, perfect for breakfast or an afternoon snack. Finished with powdered sugar.",
    image: "/ciambellone.jpeg",
    tags: ["dessert", "breakfast", "traditional", "baked"],
  },
  {
    id: 2,
    title: "Beetroot Crackers",
    content:
      "Crunchy and colorful crackers. Beetroot gives them a unique flavor and vibrant look. Great with yogurt sauce.",
    image: "/cracker_barbabietola.jpeg",
    tags: ["snack", "savory", "beetroot", "vegetarian"],
  },
  {
    id: 3,
    title: "Sweet Fried Bread",
    content:
      "A no-waste recipe: stale bread fried and coated in sugar. Simple, quick and delicious.",
    image: "/pane_fritto_dolce.jpeg",
    tags: ["dessert", "no-waste", "quick", "traditional"],
  },
  {
    id: 4,
    title: "Beetroot Pasta with Pistachios",
    content:
      "A creamy and original pasta dish: beetroot for the sauce and pistachios for crunch.",
    image: "/pasta_barbabietola.jpeg",
    tags: ["pasta", "main-course", "beetroot", "pistachios"],
  },
  {
    id: 5,
    title: "Country Chocolate Cake",
    content:
      "A rustic traditional cake made with cocoa, bread and dried fruit. Rich and full of flavor.",
    image: "/torta_paesana.jpeg",
    tags: ["dessert", "traditional", "no-waste", "baked"],
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Server del mio blog",
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${apiUrl}`);
});
