import React from "react";
import ReactDOM from "react-dom";
import pic_1 from "./images/profile1.jpg";
import SingleComment from "./singleComment";

const App = () => {
    return(
        <div className="ui comments">
           <SingleComment />
           <SingleComment />
           <SingleComment />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)