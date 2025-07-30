import { products } from "../data/mockdata";
import "../styles/Home.scss";
import { ProductList } from "../components/ProductList";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to DevMarket</h1>
      <ProductList products={products} />
    </div>
  );
}
