import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = { latitude : null, longitude : null, errorMessage : "" }
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
        return(
            <div>
                Latitude : { this.state.latitude }<br></br>
                Longitude : { this.state.longitude }<br></br>
                Error Message : { this.state.errorMessage }
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
