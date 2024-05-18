import { useState } from 'react';
import { Link } from "react-router-dom";

function Rating(props) {
            if(props.value == "angry") {
                return (<img src="/images/angry_icon.png" alt ="this is an angry icon"/>)
            }
            if(props.value=="disappointed") {
                return (<img src="/images/disappointed_icon.png" alt ="this is a disappointed icon"/>)
            }
            if(props.value =="sad") {
                return (<img src="/images/sad_icon.png" alt ="this is a sad icon"/>)
            }
            if(props.value =="nuetral") {
                return (<img src="/images/nuetral_icon.png" alt ="this is a nuetral icon"/>)
            }
            if(props.value =="surprised") {
                return (<img src="/images/surprised_icon.png" alt ="this is a surprised icon"/>)
            }
            if(props.value =="happy") {
                return (<img src="/images/happy_icon.png" alt ="this is an happy icon"/>)
            } 
            if(props.value =="joy") {
                return (<img src="/images/joy_icon.png" alt ="this is a joy icon"/>)
            }
}

function Reflection(props) {
    return (
        <>
            <textarea>{props.reflection}</textarea>
        </>
    )
}

function Pictures(props) {
    return (
        <>
            <img src={props.imgSrc} alt="picture" />
        </>
    )
}

function Expense(props) {
    return (
        <p>{props.expense}</p>
    )
}

function Split(props) {
    return (
        <p>{props.split}</p>
    )
}

function Expenses(props) {
    return (
        <>
            <Expense expense={props.expense} />
            <Split split={props.split} />
        </>
    )
}

function ViewClosedEvent() {
    return (
        <>
            <h2>View Closed Event</h2>
            <Rating value="surprised" />
            <Reflection reflection="It was fun and the food was good. I was nervous at first but it went well." />
            <Pictures imgSrc="" />
            <Expenses expense="20.00 for dinner" split="Shared dinner equally with Jordan" />
            <button type="button" id="exit_view"><Link to="/Calendar">Exit</Link></button>
        </>
    )
};

export default ViewClosedEvent;