const express = require("express");
const app = express();
const port = 8000;

const loremIpsumDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const products = [
  {
    id: 1,
    name: "Le Marquis",
    imageSmall: "http://localhost:3000/le-marquis_small.jpg",
    imageLarge: "http://localhost:3000/le-marquis_large.jpg",
    description: loremIpsumDescription,
    price: "8000€",
  },
  {
    id: 2,
    name: "Nuage",
    imageSmall: "http://localhost:3000/nuage_small.jpg",
    imageLarge: "http://localhost:3000/nuage_large.jpg",
    description: loremIpsumDescription,
    price: "700€",
  },
  {
    id: 3,
    name: "Boëme",
    imageSmall: "http://localhost:3000/boeme_small.jpg",
    imageLarge: "http://localhost:3000/boeme_large.jpg",
    description: loremIpsumDescription,
    price: "3000€",
  },
  {
    id: 4,
    name: "Obsidian",
    imageSmall: "http://localhost:3000/obsidian_small.jpg",
    imageLarge: "http://localhost:3000/obsidian_large.jpg",
    description: loremIpsumDescription,
    price: "5320€",
  },
  {
    id: 5,
    name: "Bobby",
    imageSmall: "http://localhost:3000/bobby_small.jpg",
    imageLarge: "http://localhost:3000/bobby_large.jpg",
    description: loremIpsumDescription,
    price: "300€",
  },
  {
    id: 6,
    name: "Arlequin",
    imageSmall: "http://localhost:3000/arlequin_small.jpg",
    imageLarge: "http://localhost:3000/arlequin_large.jpg",
    description: loremIpsumDescription,
    price: "650€",
  },
  {
    id: 7,
    name: "Highlander",
    imageSmall: "http://localhost:3000/highlander_small.jpg",
    imageLarge: "http://localhost:3000/highlander_large.jpg",
    description: loremIpsumDescription,
    price: "3200€",
  },
  {
    id: 8,
    name: "Prestige",
    imageSmall: "http://localhost:3000/prestige_small.jpg",
    imageLarge: "http://localhost:3000/prestige_large.jpg",
    description: loremIpsumDescription,
    price: "9800€",
  },
];

app.get("/best-sellers", (req, res) => {
  res.json(products.slice(0, 4));
});

app.get("/on-sales", (req, res) => {
  setTimeout(() => {
    res.json(products.slice(3, 7));
  }, 3000);
});

app.get("/new-arrivals", (req, res) => {
  res.json([products[2], products[1], products[8], products[3]]);
});

app.get("/product/:id", (req, res) => {
  const product = products.find(
    (product) => product.id === Number(req.params.id),
  );

  if (!product) {
    res.status(404).send("Product not found");

    return;
  }

  return res.json(product);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
