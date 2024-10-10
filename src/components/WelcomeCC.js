 import React from "react";

class WelcomeCC extends React.Component {
    state = {
        firstName: "Ahmed",
        lastName: "Tarek"
    }

    componentDidMount() {
        this.setState({
            lastName: "Elabd"
        })
    }

    render() {
        return (
            <>
            <h3>Hello from Class Component, {this.props.title}. {this.props.name} - Your age is {this.props.age}</h3>
            <h5>Its created by {this.state.firstName} {this.state.lastName}.</h5>
            <button onClick={ () => {
                this.setState({ firstName:"elm3lm Ahmed" })
            }}>Change the First Name</button>
            </>
        )
    }
}

export default WelcomeCC;