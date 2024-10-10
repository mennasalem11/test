import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductsDetails() {
  const params = useParams();

  const API_URL = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/${params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params.productId]);
  return (
    <>
      <div className="container" style={{textAlign: "center"}}>
        <h1>The Details of Product number {params.productId} : </h1>
        <hr />
        <h3>Title : {product.title}</h3>
        <hr style={{width: "150px", marginInline: "auto", padding: "5px"}}/>
        <h5>Description : {product.description}</h5>
        <hr style={{width: "150px", marginInline: "auto", padding: "5px"}}/>
        <h4>Price : {product.price} $</h4>
        <hr style={{width: "150px", marginInline: "auto", padding: "5px"}}/>
        <h4>Category : {product.category}</h4>
        <hr style={{width: "150px", marginInline: "auto", padding: "5px"}}/>
        <h4>Rating of the product is {product.rating?.rate} from {product.rating?.count} users</h4>
      </div>
    </>
  );
}

export default ProductsDetails;
