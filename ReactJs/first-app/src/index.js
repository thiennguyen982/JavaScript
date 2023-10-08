import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const buttonText = {text : "Submit"};
    const style = {backgroundColor: "red", color: "yellow"};

    return(
        <div>
            <label htmlFor="name" className="label">Enter E-Mail</label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)