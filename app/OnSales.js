import Link from "next/link";

export default async function OnSales () {
  const onSales = await fetch('http://localhost:8000/on-sales')
    .then(res => res.json());

  return (
    <ul>
      {onSales.map(onSale => (
        <li>
          <Link href={`/product/${onSale.id}/details`}>
            <article>
              <img src={onSale.imageSmall} alt="" />
              <h3>{onSale.name}</h3>
              <p>{onSale.price}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  )
}
