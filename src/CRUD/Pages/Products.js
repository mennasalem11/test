import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const viewProducts = () => {
    fetch("http://localhost:9000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  /*
  اللي هيحصل ف فانكشن الديليت دلوقتي هو ان انا هطلعله بوب اب من سويت الرت بقوله انت متأكد ؟
  showCancelButton: true, لو محطتش دي مش هيبين زرار الكانسل
  بعد كدا بنحط ذين لان النتيجه اللي بترجع دي بتبقا بروميس ف محتاج اهندلها
  طب ايه داتا دوت ايز كونفيرمد دي ؟
  Try to remove the part of if and put instead of it console.log(data) then open the console
  */

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are you Sure?`,
      text: `You want to delete ${product.title}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then(() => viewProducts());
      }
    });
  };

  useEffect(() => {
    viewProducts();
  }, []);

  return (
    <>
      <h1>Products Page</h1>
      <Link to={"/products/add"} className="btn btn-success mt-3">
        Add New Product
      </Link>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price} $</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => deleteProduct(product)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/products/view/${product.id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    Details
                  </Link>
                  <Link
                    to={`/products/edit/${product.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductsPage;
