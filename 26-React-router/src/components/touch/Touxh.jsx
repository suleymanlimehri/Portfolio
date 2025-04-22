import React from 'react'
import style from './Touch.module.css';
import { BsEnvelope } from "react-icons/bs";
const Touxh = () => {
    let message={
        borderRadius:5,
        height:60,
        width:60,
        padding:8,
        color:"white",
        backgroundColor:"#297FFD",

    }
    return (
        <div className={style.form}>
            <div className={style.content}>
                <BsEnvelope style={message}/>
                <h2 style={{fontSize:30}}> Get in touch</h2>
                <p style={{color:"rgb(173, 167, 167)",fontSize:17}}>We'd love to hear from you</p>
            </div>
            <div className={style.input}>
                <input type="text" name="" id="" placeholder='  Full name' />
                <input type="email" name="" id="" placeholder='  Email address'/>
                <input type="tel" name="" id="" placeholder='  Phone number'/>
                <textarea name="" id=""></textarea>
                <button className={style.btn}>Submit</button>
            </div>
        </div>
    )
}

export default Touxh
