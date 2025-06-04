import Modal from "@/components/Modal"
import ProductDetails from "@/components/ProductDetails"

export default async function Details ({ params }) {
  const id = (await params).id

  return (
    <Modal>
      <ProductDetails id={id} />
    </Modal>
  )
}
