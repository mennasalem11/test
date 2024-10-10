import { useState } from "react";
import "../Style.css";
import Swal from "sweetalert2";

function AddProductPage() {
  const [myID, setID] = useState("");
  const [myTitle, setTitle] = useState("");
  const [myPrice, setPrice] = useState(0);

  const addedSuccessfuly = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "New Product has been Added",
      showConfirmButton: false,
      timer: 1500
    });
  }

  const formSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/products", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ id: myID, title: myTitle, price: myPrice }),
    }).then((response) => response.json());
  };

  return (
    <>
      <h1>Add New Product</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="productID" className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            id="productID"
            placeholder="Product ID"
            aria-describedby="Product ID"
            onChange={(e) => {
              setID(e.target.value);
            }}
          />
        </div>
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

        <button type="submit" className="btn btn-primary mt-4" onClick={addedSuccessfuly}>
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProductPage;
