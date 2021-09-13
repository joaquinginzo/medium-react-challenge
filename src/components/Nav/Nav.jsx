import React from "react"
import "./Nav.scss"
import MediumLogo from "/Users/joaco/Desktop/development/react/medium-challenge/src/assests/images/mediumlogo.png"


const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__container nav__container-left">
                <img src={MediumLogo} alt="" className="nav__container-logo" />
                <h2 className="nav__container-item brand">Medium</h2>
                <h3 className="nav__container-item">Programming</h3>
            </div>


            <div className="nav__container nav__container right">
                <p className="nav__container-item">Become a member</p>
                <p className="nav__container-item nav__container-sign">Sign in</p>
                <button className="nav__container-item nav__container-btn">Get Started</button>
            </div>
        </nav>
    )       
};

export default Nav;