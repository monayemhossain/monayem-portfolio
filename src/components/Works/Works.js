import React, { useState } from 'react';
import mobileImg from "../../assets/mobile.png";
import globeImg from "../../assets/globe.png";
import writingImg from "../../assets/writing.png";
import arrow from "../../assets/arrow.png";
import "./Works.scss"

const Works = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: mobileImg,
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: globeImg,
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: writingImg,
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];
    
// slider handle Function

const handleClick = (way) => {
  way === "left"
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
};



    return (
        <div className='works' id='works'>
           <div className="slider"   style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
             {
               data.map(d=>(
                <div className="container">
                <div className="item">
                    <div className="left"> 
                    <div className="leftContainer">
                        <div className="imgContainer">
                            <img src={d.icon} alt="" />
                        </div>
                        <h2>{d.title}</h2>
                        <p>{d.desc}</p>
                        <span>Projects</span>
                    </div>
                    </div>
                    <div className="right">
                    <img
               src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
               alt=""
             />
                    </div>
                </div>
            </div>


               ))
             }
             
           </div>
           <img src={arrow} onClick={()=> handleClick("left")} alt="" className="left arrow" />
           <img src={arrow}  onClick={()=> handleClick()} alt="" className="right arrow" />
        </div>
    );
};

export default Works;