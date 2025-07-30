export const ProductCard = ({product}:any) => {
  return (
     <div className="product-page">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <strong>${product.price.toFixed(2)}</strong>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}