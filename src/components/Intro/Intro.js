import React, { useEffect, useRef } from 'react';
import "./Intro.scss";
import profileImg from "../../assets/man.png";
import downArrow from "../../assets/down.png";
import { init } from 'ityped';


const Intro = () => {
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, { 
          showCursor: true, 
          backDelay:1500,
          backSpeed:60,
          strings: ['Web Developer', 'Front End Developer',' Web Designer'] 
        })
      }, []);
   
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={profileImg} alt="profile pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi  There, I'm</h2>
                    <h1>M Monayem Hossain</h1>
                    <h3>A React  <span  ref={textRef}> </span></h3>
                </div>
                <a href="#portfolio">
                    <img src={downArrow} alt="down arrow" />
                </a>
            </div>
        </div>
    );
};

export default Intro;