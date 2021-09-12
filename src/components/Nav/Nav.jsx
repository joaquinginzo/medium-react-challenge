import React from "react"
import "./Nav.scss"


const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__container nav__container-left">
                <div className="full-box"></div>
                <div className="half-box"></div>
                <div className="quarter-box"></div>
                <div></div>
                <h2 className="nav__container-item brand">Medium</h2>
                <h3 className="nav__container-item">Programming</h3>
            </div>


            <div className="nav__container nav__container right">
                <p className="nav__container-item">Become a member</p>
                <p className="nav__container-item">Sign in</p>
                <button className="nav__container-item">Get Started</button>
            </div>
        </nav>
    )       
};

export default Nav;