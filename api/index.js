const express = require('express')
const app = express()
const port = 8000

app.get('/best-sellers', (req, res) => {
  res.json([
    { id: 1, "name": "Le Marquis", "image": "http://localhost:3000/le-marquis.jpg", "price": "8000€" },
    { id: 2, "name": "Nuage", "image": "http://localhost:3000/nuage.jpg", "price": "700€" },
    { id: 3, "name": "Boëme", "image": "http://localhost:3000/boeme.jpg", "price": "3000€" },
    { id: 4, "name": "Obsidian", "image": "http://localhost:3000/obsidian.jpg", "price": "5320€" },
  ])
})

app.get('/on-sales', (req, res) => {
  setTimeout(() => {
    res.json([
      { id: 5,"name": "Bobby", "image": "http://localhost:3000/bobby.jpg", "price": "300€" },
      { id: 6,"name": "Arlequin", "image": "http://localhost:3000/arlequin.jpg", "price": "650€" },
      { id: 7,"name": "Highlander", "image": "http://localhost:3000/highlander.jpg", "price": "3200€" },
      { id: 8,"name": "Prestige", "image": "http://localhost:3000/prestige.jpg", "price": "9800€" }
    ])
  }, 3000)
})

app.get('/new-arrivals', (req, res) => {
  res.json([
    { id: 3, "name": "Boëme", "image": "http://localhost:3000/boeme.jpg", "price": "3000€" },
    { id: 9, "name": "Gatsby", "image": "http://localhost:3000/gatsby.jpg", "price": "4700€" },
    { id: 2, "name": "Nuage", "image": "http://localhost:3000/nuage.jpg", "price": "700€" },
    { id: 4, "name": "Obsidian", "image": "http://localhost:3000/obsidian.jpg", "price": "5320€" },
  ])
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
