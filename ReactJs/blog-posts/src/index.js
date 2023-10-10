import React from "react";
import ReactDOM from "react-dom";
import pic_1 from "./images/profile1.jpg";
import pic_2 from "./images/profile2.jpg";
import pic_3 from "./images/profile3.jpg";
import SingleComment from "./singleComment";
import UserCard from "./userCards";

const App = () => {
    return(
        <div className="ui comments">
            <UserCard>
                <div>
                    Hello My Name Is Erling Halland
                </div>
            </UserCard>
            <UserCard>
                <SingleComment 
                    name="Cristiano Ronaldo" 
                    date="Today At 5:00PM" 
                    text = "It's Amazing"
                    picture = {pic_1}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name="Lionel Messi" 
                    date="Today At 7:00PM"
                    text = "Great Job!!"
                    picture = {pic_2} 
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name="Ricardo Kaka" 
                    date="Today At 9:00PM" 
                    text = "Congratulation On The New Role!"
                    picture = {pic_3}
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)