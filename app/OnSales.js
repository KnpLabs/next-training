export default async function OnSales () {
  const onSales = await fetch('http://localhost:8000/on-sales')
    .then(res => res.json());

  return (
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
  )
}
