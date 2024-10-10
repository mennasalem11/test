import { useState } from "react";

function FormFC() {
  const [nameData, setName] = useState("");
  const [passwordData, setPassword] = useState("");
  const [genderData, setGender] = useState("male");

  const onSumbitHandler = (e) => {
    e.preventDefault();
    console.log({
      nameData,
      passwordData,
      genderData,
      
    });
  };

  const nameHandler = (value) => {
    setName(value);
  };

  const passwordHandler = (value) => {
    setPassword(value);
  };

  const genderHandler = (value) => {
    setGender(value);
  };

  return (
    <>
      <h2>This is form with Function Component</h2>
      <form onSubmit={onSumbitHandler}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(event) => nameHandler(event.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Your Password"
          onChange={(event) => passwordHandler(event.target.value)}
        />
        <br />
        <label>Gender</label>
        <select
          onChange={(event) => {
            genderHandler(event.target.value);
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormFC;
