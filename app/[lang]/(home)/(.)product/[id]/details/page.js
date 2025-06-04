import {notFound} from "next/navigation"
import Image from "next/image"
import Modal from "@/components/Modal"

export default async function Details ({ params }) {
  const id = (await params).id
  const couch = await fetch(`http://localhost:8000/product/${id}`)
    .then(res => res.ok ? res.json() : null)

  if (!couch) {
    return notFound()
  }

  return (
    <Modal>
        <section className="product-image">
          <Image
            src={couch.imageLarge}
            height={400}
            width={400}
            alt=""
          />
        </section>
        <section className="product-description">
          <article>
            <h1>{couch.name}</h1>
            <p className="price">{couch.price}</p>
            <p>{couch.description}</p>
          </article>
        </section>
    </Modal>
  )
}
