// import { createContext, useState } from "react";
import Navbar from "../Context/Navbar";
import ProductsProvider from "../Context/ProductsContext";
import ProductsList from "../Context/ProductsList";



function AppContext() {

  
  return (
    <>
    <div className="App">
        <ProductsProvider>
            <Navbar/>
            <ProductsList/>
        </ProductsProvider>
    </div>
    </>
  )
}

export default AppContext;
