function Product(props) {
  return (
    <div className="card">
      <h1>{props.p.title}</h1>
      <h3>Category : {props.p.category}</h3>
      <img
        src={props.p.image}
        alt=""
        style={{ width: "200px", height: "auto" }}
      />
      <h4>{props.p.description}</h4>
      <h3>It's price : {props.p.price} $</h3>
    </div>
  );
}

export default Product;
