const express = require("express");
const app = express();
const port = 8000;

const loremIpsumDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

app.get("/best-sellers", (req, res) => {
  res.json([
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
  ]);
});

app.get("/on-sales", (req, res) => {
  setTimeout(() => {
    res.json([
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
    ]);
  }, 3000);
});

app.get("/new-arrivals", (req, res) => {
  res.json([
    {
      id: 3,
      name: "Boëme",
      imageSmall: "http://localhost:3000/boeme_small.jpg",
      imageLarge: "http://localhost:3000/boeme_large.jpg",
      description: loremIpsumDescription,
      price: "3000€",
    },
    {
      id: 9,
      name: "Gatsby",
      imageSmall: "http://localhost:3000/gatsby_small.jpg",
      imageLarge: "http://localhost:3000/gatsby_large.jpg",
      description: loremIpsumDescription,
      price: "4700€",
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
      id: 4,
      name: "Obsidian",
      imageSmall: "http://localhost:3000/obsidian_small.jpg",
      imageLarge: "http://localhost:3000/obsidian_large.jpg",
      description: loremIpsumDescription,
      price: "5320€",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
