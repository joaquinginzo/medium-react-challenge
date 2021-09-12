import React from "react";
import FeaturedImageSrc from "/Users/joaco/Desktop/development/react/medium-challenge/src/assests/images/murray2.jpeg"
import "./Featured.scss"

const Featured = (props) => {
    return (
        <div className="container">
            <h3>FEATURED WRITER</h3>
            <div className="content">
                <div className="content__img">
                    <img className="content__img-picture" src={FeaturedImageSrc} alt/> <br />
                    <button className="button">Follow</button>
                </div>
                <div className="content__person"></div>
                <div className="content__news">
                    <div className="content__news-item"></div>
                    <div className="content__news-item"></div>
                    <div className="content__news-item"></div>
                </div>
            </div>

        </div>
    )
}

export default Featured