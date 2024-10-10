import "./ProductsList.css";
import Product from "./Product";
import productsData from "./productsData";

function ProductsList() {
  const products = productsData.map((product) => {
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
        Here is your Products Without API
      </h1>
      <div className="products-list">{products}</div>;
    </>
  );
}

export default ProductsList;
