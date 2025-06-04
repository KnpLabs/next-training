export default function HomeLayout({ bestSellers, onSales, children }) {
  return (
    <main>
      {bestSellers}
      {onSales}
      {children}
    </main>
  )
}
