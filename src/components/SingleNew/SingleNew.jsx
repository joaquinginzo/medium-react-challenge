import React from "react";
import "./SingleNew.scss";
import NewImageSrc from "/Users/joaco/Desktop/development/react/medium-challenge/src/assests/images/SingleNew.jpg"

const SingleNew = (props) => {

    return(
        <div className="new-container">
            <div className="new-container__text">
                <h3>{props.title}</h3>
                <p>{props.paragraph}</p>
                <p className="new-container__text-author">{props.author}</p>
                <p className="new-container__text-date">{props.date}</p>
            </div>
            <div className="new-container__pic">
                <img src={NewImageSrc} alt="" />

            </div>
        </div>
    )
}

export default SingleNew