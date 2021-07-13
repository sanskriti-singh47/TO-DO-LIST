import React from 'react'
import './css/about.css'
export const About = () => {
    let aboutstyle={
        color:" black",
    }
    let card={
        height:"20vh",
        margin:"auto",
        padding:"20px 0 0 0 ",
    }
    return (
        <>
        <div className="container my-5" >
        <h1 className="text-center head" style={aboutstyle}>About Us</h1>
           <br/><br/>
            <div className="card w-50 " style={card}>
               <div className="card-body">
               <p className="card-text" style={aboutstyle} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus sit fugit ullam magnam, nostrum ad iste.
               Ullam reprehenderit sunt numquam ad provident possimus perspiciatis inventore a ipsa, atque quidem tempore.</p>
               </div>
            </div>
            {/* <h1 className="text-center" style={aboutstyle}>About Us</h1>
            <p style={aboutstyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus sit fugit ullam magnam, nostrum ad iste.
               Ullam reprehenderit sunt numquam ad provident possimus perspiciatis inventore a ipsa, atque quidem tempore.</p> */}
        </div>
        <hr/>
        </>
    )
}
