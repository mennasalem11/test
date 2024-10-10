import { useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";

function EditProjectPage() {
  let { productID } = useParams();

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();

  const formSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:9000/products/${productID}`, {
      method: "PUT",
      // headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ title, price }),
    }).then((response) => response.json());
  };

  const editSuccessfuly = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Product ${productID} has been Edited`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <h1>Edit Product {productID}</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Product Title"
            aria-describedby="Product Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            aria-describedby="Product Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-4"
          onClick={editSuccessfuly}
        >
          Add Product
        </button>
      </form>
    </>
  );
}

export default EditProjectPage;
