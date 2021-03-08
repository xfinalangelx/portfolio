import React from 'react'
import Typed from 'react-typed'


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h4>Hi, I'm Teo Richie!</h4>
                <h3>From Universiti Malaya</h3>
                <h4>I'm</h4>
                <Typed
                    className="typed-text"
                    strings={["2nd Year Bsc Computer Science Information Systems student","President of PEKOM","Web Designer", "Web Developer","Data Scientist", "Project Manager", "UI/UX Designer", "Mobile App Developer", "Software Tester", "Graphic Designer"]}
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
