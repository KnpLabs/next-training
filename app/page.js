import OnSales from "./OnSales";
import { Suspense } from "react";

export default async function Home () {
  const bestSellers = await fetch('http://localhost:8000/best-sellers')
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
                  <img src={bestSeller.imageSmall} alt="" />
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
          <Suspense fallback={<p>Loading...</p>}>
            <OnSales />
          </Suspense>
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
