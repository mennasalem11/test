import React from "react";

class FormCC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameData: "",
      passwordData: "",
      genderData: "Male",
    };
  }

  onSumbitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  nameHandler = (value) => {
    this.setState({ nameData: value });
  };

  passwordHandler = (value) => {
    this.setState({ passwordData: value });
  };

  genderHandler = (value) => {
    this.setState({ genderData: value });
  };
  render() {
    return (
      <>
        <h2>This is form with Class Component</h2>
        <form onSubmit={this.onSumbitHandler}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(event) => this.nameHandler(event.target.value)}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            placeholder="Your Password"
            onChange={(event) => this.passwordHandler(event.target.value)}
          />
          <br />
          <label>Gender</label>
          <select
            onChange={(event) => {
              this.genderHandler(event.target.value);
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
}

export default FormCC;
