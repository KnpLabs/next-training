import Link from "next/link";
import Image from "next/image";

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
      <section>
        <h2>{t.bestSellers}</h2>
        <div className="home-products">
          <ul>
            {bestSellers.map(bestSeller => (
              <li>
                <Link href={`/product/${bestSeller.id}/details`}>
                  <article>
                    <Image src={bestSeller.imageSmall} width={145} height={145} alt="" />
                    <h3>{bestSeller.name}</h3>
                    <p>{bestSeller.price}</p>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
  );
}
