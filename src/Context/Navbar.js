import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

function Navbar() {
    const value = useContext(ProductsContext);
    return (
        <>
        <div className="navbar">
            <h1>Products Count: {value.length}</h1>
        </div>
        </>
    )
}

export default Navbar;