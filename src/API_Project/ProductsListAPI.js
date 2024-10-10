import Product from "../Example/Product";
import { useEffect, useState } from "react";

function ProductsListAPI() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const productsData = products.map((product) => {
    return <Product key={product.id} p={product} />;
  });

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "red",
          textDecoration: "underline",
        }}
      >
        Here is your Products With API
      </h1>
      <div className="products-list">{productsData}</div>;
    </>
  );
}

export default ProductsListAPI;
