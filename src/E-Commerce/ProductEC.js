import { Link } from "react-router-dom";
import "./Slider.css"

function ProductEC(props) {
  const { p } = props;

  return (
    <>
    <div className="cardContainer">
      <div className="card">
        <img src={p.image} className="card-img-top" alt={p.title} />
        <div className="card-body">
          <h5 className="card-title">{p.title}</h5>
          <p className="card-text">{p.description}</p>
          <Link className="btn btn-primary" to={`/product/${p.id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductEC;
