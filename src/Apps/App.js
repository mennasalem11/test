import WelcomeFC from "../components/WelcomeFC";
import WelcomeCC from "../components/WelcomeCC";
import FormFC from "../components/FormFC";
import FormCC from "../components/FormCC";

function App() {
  const myName = "Ahmed";
  function greeting(name) {
    return <h2>Hello, {name}</h2>;
  }

  return (
    <>
      <div className="App">
        <h1>Hello React App from App.js</h1>
        {greeting(myName)}
      </div>
      <hr />
      <div className="test">
        <h3>ay 7aga kont b test bs</h3>
      </div>
      <hr />
      <WelcomeFC name="Ahmed" age="20" title="Mr" />
      <WelcomeFC name="Menna" age="19" title="Ms" />
      <hr />
      <WelcomeCC name="Ahmed" age="20" title="Mr" />
      <WelcomeCC name="Menna" age="19" title="Ms" />
      <hr />
      <FormFC />
      <hr />
      <FormCC />
    </>
  );
}

export default App;
