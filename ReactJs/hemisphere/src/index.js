import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay.js";

class App extends React.Component {

    state = { latitude : null, longitude : null, errorMessage : "" }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ 
                    latitude : position.coords.latitude,
                    longitude : position.coords.longitude
                 })
                this.state.latitude = position.coords.latitude
                this.state.longitude = position.coords.longitude
            },
            (error) => {
                this.setState({ errorMessage : error.message })
            }
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.latitude && !this.state.longitude) {
            return <div>Error message : {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude && this.state.longitude) {
            return <div>
                <HemisphereDisplay latitude={this.state.latitude}/>
            </div>
        }
        else {
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
