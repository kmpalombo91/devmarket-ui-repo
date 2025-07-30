import { useParams } from "react-router-dom";
import { products } from "../data/mockdata";
import "../styles/ProductDetails.scss";
import { ProductCard } from "../components/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <ProductCard product={product} />
  );
}
