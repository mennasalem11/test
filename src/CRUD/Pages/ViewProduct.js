import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ViewProductPage() {
  let { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  });

  return (
    <>
      <h1>Details of Product {productID} </h1>
      <hr />
      <h3>Title : {product.title}</h3>
      <hr style={{ width: "150px", marginInline: "auto", padding: "5px" }} />
      <h5>Description : {product.description}</h5>
      <hr style={{ width: "150px", marginInline: "auto", padding: "5px" }} />
      <h4>Price : {product.price} $</h4>
      <hr style={{ width: "150px", marginInline: "auto", padding: "5px" }} />
      <h4>Category : {product.category}</h4>
      <hr style={{ width: "150px", marginInline: "auto", padding: "5px" }} />
      <h4>
        Rating of the product is {product.rating?.rate} from{" "}
        {product.rating?.count} users
      </h4>
    </>
  );
}

export default ViewProductPage;
