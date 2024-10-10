import { createContext, useState } from "react";

export const ProductsContext = createContext();

function ProductsProvider(props) {
    const [products] = useState([
        { id: 1, title: "Product1" },
        { id: 2, title: "Product2" },
        { id: 3, title: "Product3" },
        { id: 4, title: "Product4" },
      ]);
    return (
        <>
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
        </>
    )
}

export default ProductsProvider;