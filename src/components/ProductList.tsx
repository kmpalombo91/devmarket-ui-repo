import { Link } from "react-router-dom";

export const ProductList = ({products}:any) => {
  return (
     <div className="product-list">
        {products.map((product:any) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
  );
}