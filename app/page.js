export default async function Home () {
  const bestSellers = await fetch('http://localhost:8000/best-sellers')
    .then(res => res.json());
  const onSales = await fetch('http://localhost:8000/on-sales')
    .then(res => res.json());

  return (
    <main>
      <section>
        <h2>Best sellers</h2>
        <div className="home-products">
          <ul>
            {bestSellers.map(bestSeller => (
              <li>
                <article>
                  <img src={bestSeller.image} alt="" />
                  <h3>{bestSeller.name}</h3>
                  <p>{bestSeller.price}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h2>On sales</h2>
        <div className="home-products">
          <ul>
            {onSales.map(onSale => (
              <li>
                <article>
                  <img src={onSale.image} alt="" />
                  <h3>{onSale.name}</h3>
                  <p>{onSale.price}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h2>Latest products</h2>
        <div className="home-products">
          <p>Will be implemented soon...</p>
        </div>
      </section>
    </main>
  );
}
