import React,{useState} from 'react';
import "./Contact.scss";
import shake from "../../assets/shake.svg";

const Contact = () => {
   const [message,setMessage]= useState(false)

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className='contact' id='contact'>
         <div className="left">
        <img src={shake} alt="" />
         </div>
         <div className="right">
        <h2>Contact</h2>
        <form onSubmit ={handleFormSubmit}>
        <input type="email" name="" placeholder='Write your email' />
        <textarea placeholder='Messeage write here...'  ></textarea>
        <button type="submit">Send</button>
        {message && <span> Thanks. I will reply ASAP</span>}
        </form>
         </div>
        </div>
    );
};

export default Contact;