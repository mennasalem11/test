import { Routes, Route } from "react-router-dom";
import Navbar from "../CRUD/Navbar";
import Sidebar from "../CRUD/Sidebar";
import "../CRUD/Style.css";
import HomePage from "../CRUD/Pages/Home";
import ProductsPage from "../CRUD/Pages/Products";
import AddProductPage from "../CRUD/Pages/AddProduct";
import EditProjectPage from "../CRUD/Pages/EditProduct";
import ViewProductPage from "../CRUD/Pages/ViewProduct";

function AppCrud() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="products" element={<ProductsPage />}></Route>
              <Route path="products/add" element={<AddProductPage />}></Route>
              <Route
                path="products/view/:productID"
                element={<ViewProductPage />}
              ></Route>
              <Route
                path="products/edit/:productID"
                element={<EditProjectPage />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppCrud;
