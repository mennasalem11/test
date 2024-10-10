import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
        <ul>
            <li className="list-unstyled">
                <Link to="/products">Get all Products</Link>
            </li>
        </ul>
        </>
    )
}

export default Sidebar;