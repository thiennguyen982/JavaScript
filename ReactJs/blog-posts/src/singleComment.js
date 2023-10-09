import React from "react";
import pic_1 from "./images/profile1.jpg";

const SingleComment = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={pic_1} alt="profile picture" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Cristiano Ronaldo
                </a>
                <div className="metadata">
                    <span className="date">
                        Today at 5:00PM
                    </span>
                </div>
                <div className="text">
                    It's Amazing
                </div>
            </div>
        </div>
    )
}

export default SingleComment;