import OnSales from "./OnSales";
import { Suspense } from "react";
import Link from "next/link";

const translations = {
  en: {
    bestSellers: 'Best sellers',
    onSales: 'On sales',
    latestProducts: 'Latest products',
  },
  fr: {
    bestSellers: 'Meilleures ventes',
    onSales: 'En promotion',
    latestProducts: 'Derniers produits'
  },
}

export default async function Home ({ params }) {
  const lang = (await params).lang;
  const t = translations[lang];
  const bestSellers = await fetch(`http://localhost:8000/best-sellers`)
    .then(res => res.json());

  return (
    <main>
      <section>
        <h2>{t.bestSellers}</h2>
        <div className="home-products">
          <ul>
            {bestSellers.map(bestSeller => (
              <li>
                <Link href={`/product/${bestSeller.id}/details`}>
                  <article>
                    <img src={bestSeller.imageSmall} alt="" />
                    <h3>{bestSeller.name}</h3>
                    <p>{bestSeller.price}</p>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h2>{t.onSales}</h2>
        <div className="home-products">
          <Suspense fallback={<p>Loading...</p>}>
            <OnSales />
          </Suspense>
        </div>
      </section>
      <section>
        <h2>{t.latestProducts}</h2>
        <div className="home-products">
          <p>Will be implemented soon...</p>
        </div>
      </section>
    </main>
  );
}
