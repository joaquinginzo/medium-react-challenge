import React from "react";
import "./Main.scss"
import MainImageSrc from "/Users/joaco/Desktop/development/react/medium-challenge/src/assests/images/1_7j76OU6wjvkTZOZLjDXE2Q.jpeg"
import AuthorImg from "/Users/joaco/Desktop/development/react/medium-challenge/src/assests/images/Murray.jpeg"

const Main = (props) => {
    return (
        <div>
            <img src={MainImageSrc} alt="" />
            <h1>{props.title}</h1>
            <h5>{props.subtitle}</h5>
            <div className="author-description">
                <div>
                    <img className="author-image" src={AuthorImg} alt="" />
                </div>
                <div>
                    <p>{props.author}</p>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default Main

