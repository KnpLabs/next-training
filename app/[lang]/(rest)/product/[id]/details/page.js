import ProductDetails from "@/components/ProductDetails"

export default async function Details ({ params }) {
  const id = (await params).id

  return (
    <main className="product-details-page">
      <ProductDetails id={id} />
    </main>
  )
}
