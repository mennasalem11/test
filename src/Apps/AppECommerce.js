import { Routes, Route } from "react-router-dom";
import Navbar from "../E-Commerce/Navbar";
import Slider from "../E-Commerce/Slider";
import ProductsListEC from "../E-Commerce/ProductsListEC";
import AboutEC from "../E-Commerce/AboutEC";
import ProductsDetails from "../E-Commerce/ProductsDetails";

function AppECommerce() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsListEC />
            </>
          }
        />
        <Route path="about" element={<AboutEC />} />
        <Route path="product/:productId" element={<ProductsDetails />} />
      </Routes>
    </div>
  );
}

export default AppECommerce;
