const express = require('express')
const app = express()
const port = 8000

app.get('/best-sellers', (req, res) => {
  res.json([
    { id: 1, "name": "Couch 1", "image": "http://localhost:3000/sofa.webp", "price": "100€" },
    { id: 2, "name": "Couch 2", "image": "http://localhost:3000/sofa.webp", "price": "200€" },
    { id: 3, "name": "Couch 1", "image": "http://localhost:3000/sofa.webp", "price": "100€" },
    { id: 4, "name": "Couch 2", "image": "http://localhost:3000/sofa.webp", "price": "200€" },
  ])
})

app.get('/on-sales', (req, res) => {
  setTimeout(() => {
    res.json([
      { id: 5,"name": "Couch 3", "image": "http://localhost:3000/sofa.webp", "price": "200€" },
      { id: 6,"name": "Couch 4", "image": "http://localhost:3000/sofa.webp", "price": "200€" },
      { id: 7,"name": "Couch 3", "image": "http://localhost:3000/sofa.webp", "price": "200€" },
      { id: 8,"name": "Couch 4", "image": "http://localhost:3000/sofa.webp", "price": "200€" }
    ])
  }, 3000)
})

app.get('/new-arrivals', (req, res) => {
  res.json([
    { id: 9, "name": "Couch 5", "image": "http://localhost:3000/sofa.webp", "price": "200€" },
    { id: 10, "name": "Couch 6", "image": "http://localhost:3000/sofa.webp", "price": "200€" },
    { id: 11, "name": "Couch 5", "image": "http://localhost:3000/sofa.webp", "price": "200€" },
    { id: 12, "name": "Couch 6", "image": "http://localhost:3000/sofa.webp", "price": "200€" }
  ])
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
