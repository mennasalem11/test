import { useState } from "react";
import ProductEC from "./ProductEC";
import { useEffect } from "react";

function ProductsListEC() {
  /*
    ايه اللي هيحصل هنا ؟
    اخدنا اللينك و حطيناه ف كونست و بعد كدا روحنا عملنا فيتش للينك دا و زي م احنا عارفين ان الفيتش بيرجع بروميس
    ف هنعمله زين -- طب زين ايه ؟
    خزنلي بقا المعلومات اللي هتيجي من اللينك دا علي هيئه جيسون و اوبجيكتس
    طب و بعدين ؟
    هاتلي بقا الداتا من الجيسون فايل دا و اعملهالي سيت بروديكت من اليوز ستيت بتاعتنا   
    
    2. Why useEffect?
        useEffect is used for performing side effects in a functional component. 
        Fetching data from an external API is considered a side effect because it's an interaction with the outside world.
        The useEffect hook ensures that the fetch request happens when the component is first rendered (or mounted). 
        This is similar to how componentDidMount works in class-based components.

    3. What does [] at the end mean?
        The empty array [] is known as the dependency array.
        It controls when the useEffect hook is run.
        An empty array means that the effect will only run once when the component is first mounted.
        It won’t run again on subsequent re-renders of the component unless the component is unmounted and remounted.
*/

  const API_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${API_URL}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const getItemsOfCategory = (catName) => {
    fetch(`${API_URL}/category/${catName}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center" p-4>
        Our Products
      </h2>
      <div className="container">
        <div className="buttons" style={{display:"flex", justifyContent: "center", gap: "10px", marginBlock: "15px"}}>
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => getItemsOfCategory(cat)}
                class="btn btn-outline-primary"
              >
                {cat}
              </button>
            );
          })}
          <button class="btn btn-outline-primary" onClick={() => getProducts()}>
            All Items
          </button>
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-4" key={product.id}>
                <ProductEC p={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsListEC;
