import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

function ProductsList() {
  const value = useContext(ProductsContext);

  return (
    <>
      <div className="productsList">
        {value.map((product) => (
          <h1 key={value.id}>{product.title}</h1>
        ))}
      </div>
    </>
  );
}

export default ProductsList;
