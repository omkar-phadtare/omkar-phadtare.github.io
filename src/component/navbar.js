import React from 'react';
import { useState } from 'react';
import './style.css';

const Section =()=>{

    const[tog,setTog] = useState("morning");
    const[togName,setTogName] = useState({togbtn:"Night",togcolor:"dark"})
    const darkMode = ()=>{
        if(tog==="morning" && togName.togbtn==="Night")
        {
            setTog("night")
            setTogName({togbtn:"Day",togcolor:"light"})

        }
        else{
            setTog("morning")
            setTogName({togbtn:"Night",togcolor:"dark"})
        }
    }

return(
<div>
{/* <div className='container section' style={{Height:"100px",margin:"500px"}} id="sectionId">
<h1> section 1</h1>
</div>
<div className='container section' id="sectionId2">
<h1> section </h1>
</div>
<div className='container section' id="sectionId3">
<h1> section </h1>
</div> */}

    <header className={`${tog}`}>
    
        <div className="container">
        
            <div className="row">
                <div className="header__top">
                    <div className="col-md-6 header__top-brand">
                        <h1><span className="bold">OMKAR</span> Portfolio</h1>
                        <hr/>       
                    </div>
                    <nav className="col-md-6 header__top-nav hidden-md-down">
                        <ul>
                        <li><button className={`scroll btn border border-${togName.togcolor} text-light`} onClick={darkMode}>{togName.togbtn}</button></li>

                            <li><a className="scroll" href="#about">About</a></li>
                            <li><a className="scroll" href="#skills">Skills</a></li>
                            <li><a className="scroll" href="#portfolio">Portfolio</a></li>
                            <li><a className="scroll" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <nav className="col-md-6 header__top--responsive hidden-lg-up">
                        <ul>
                            <li><a className="menu-bars" href="#"><i className="fa fa-bars" aria-hidden="true"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            
            <div className="header__content">
                <p className="bold">Hello !</p>
                <p>I'm a <span className="bold some-text-work">Full Stack Developer</span></p>
                <a className="btn btn-transparent bg-transparent scroll some-btn-work" href="#portfolio">See My Work</a>
            </div>
            
            <div className="header__arrow">
                <a className="scroll" href="#about"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
            </div>
            
        </div>                
    </header>
    
</div>
)
}
export default Section;