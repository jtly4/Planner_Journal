import { useState } from 'react';
import { Link } from "react-router-dom";

function Rating(props) {
            if(props.value == "angry") {
                return (<img src="/images/angry_icon.png" alt ="this is an angry icon" className="closed-img" />)
            }
            if(props.value=="disappointed") {
                return (<img src="/images/disappointed_icon.png" alt ="this is a disappointed icon" className="closed-img" />)
            }
            if(props.value =="sad") {
                return (<img src="/images/sad_icon.png" alt ="this is a sad icon" className="closed-img" />)
            }
            if(props.value =="nuetral") {
                return (<img src="/images/nuetral_icon.png" alt ="this is a nuetral icon" className="closed-img" />)
            }
            if(props.value =="surprised") {
                return (<img src="/images/surprised_icon.png" alt ="this is a surprised icon" className="closed-img" />)
            }
            if(props.value =="happy") {
                return (<img src="/images/happy_icon.png" alt ="this is an happy icon" className="closed-img" />)
            } 
            if(props.value =="joy") {
                return (<img src="/images/joy_icon.png" alt ="this is a joy icon" className="closed-img" />)
            }
}

function Reflection(props) {
    return (
        <div className='closed-reflection'>
            <label>Reflection: </label><br />
            <textarea cols = "180" rows="10" >{props.reflection}</textarea>
        </div>
    )
}

function Pictures(props) {
    if(props.imgSrc==""){
        return (
            <div className='closed-picture'>
                <img src="/images/journal_icon.png" alt="picture" />
            </div>
        )
    } else {
        return (
            <div className='closed-picture'>
                <img src={props.imgSrc} alt="picture" />
            </div>
        )
    }
}

function Expense(props) {
    return (
        <div className='closed-expense'>
            <label>Expenses:</label><br />
            <textarea rows="11" cols="50">{props.expense}</textarea>
        </div>
    )
}

function Split(props) {
    return (
        <div className="closed-split">
        <label>Split:</label><br />
        <textarea rows="11" cols="48">{props.split}</textarea>
        </div>
    )
}

function Expenses(props) {
    return (
        <div className='closed-expenses'>
            <Expense expense={props.expense} />
            <Split split={props.split} />
        </div>
    )
}

function ViewClosedEvent() {
    return (
        <>
            <h2 className="page-title">View Closed Event</h2>
            <div className='closed-event'>
                <div className='closed-left'>
                    <Pictures imgSrc="/images/IMG-3841.jpg" className='closed-picture' />
                </div>
                <div className='closed-right'>
                    <div className='closed-top'>
                        <Rating value="surprised" />
                        <Reflection reflection="It was fun and the food was good. I was nervous at first but it went well." />
                    </div>
                    <div className='closed-bottom'>
                        {/* <Expenses expense="20.00 for dinner" split="Shared dinner equally with Jordan" /> */}
                        <Expense expense = "$20.00 - dinner" />
                        <Split split= "Shared dinner equally with Jordan" />
                    </div>
                </div>
            </div>
            <button type="button" id="exit-closed"><Link to="/Calendar">Exit</Link></button>
        </>
    )
};

export default ViewClosedEvent;