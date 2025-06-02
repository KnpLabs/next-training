import Image from "next/image";
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

export default async function OnSales ({ params }) {
  const lang = (await params).lang;
  const t = translations[lang];

  const onSales = await fetch('http://localhost:8000/on-sales')
    .then(res => res.json());

  return (
      <section>
        <h2>{t.onSales}</h2>
        <div className="home-products">
          <ul>
            {onSales.map(onSale => (
              <li>
                <Link href={`/product/${onSale.id}/details`}>
                  <article>
                    <Image src={onSale.imageSmall} width={145} height={145} alt="" />
                    <h3>{onSale.name}</h3>
                    <p>{onSale.price}</p>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
  )
}
