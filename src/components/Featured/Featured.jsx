import React from "react";
import FeaturedImageSrc from "/Users/joaco/Desktop/development/react/medium-challenge/src/assests/images/murray2.jpeg"
import "./Featured.scss"
import JavaImg from "/Users/joaco/Desktop/development/react/medium-challenge/src/assests/images/java.png";

const Featured = (props) => {
    return (
        <div className="container">
            <h3 className="container__title">FEATURED WRITER</h3>
            <div className="content">
                <div className="content__img">
                    <img className="content__img-picture" src={FeaturedImageSrc} alt/> <br/>
                    <button className="button">Follow</button>
                </div>
                <div className="content__person">
                    <h3>{props.title}</h3>
                    <p>{props.paragraph}</p>
                </div>
                <div className="content__news">
                    <div className="content__news-item">
                        <img className="content__news-img"src={JavaImg} alt="Js" />
                        <h4>{props.articleTitle}</h4>
                    </div>
                    <div className="content__news-item">
                        <img className="content__news-img"src={JavaImg} alt="Js" />
                        <h4>{props.articleTitle}</h4>
                    </div><div className="content__news-item">
                        <img className="content__news-img"src={JavaImg} alt="Js" />
                        <h4>{props.articleTitle}</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured