import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Hi, I'm a 2nd year Information Systems student in Universiti Malaya!</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development","Data Science", "Project Management", "UI/UX Designer", "Mobile App Developer", "Software Tester", "Graphic Design"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
