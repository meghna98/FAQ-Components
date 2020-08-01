import React from 'react'
import Vector from '../images/Vector.svg'
import './SingleInputFaq.css';

function SingleInputFaq(props) {
    return (
        <div className={"singleInputFaqContainer"}>
            <div className="input-faq-ques">
            <div className="input-faq-ques-Q">Q</div>&emsp;
            <div className="input-faq-ques-content">{props.faq.ques}</div> 
            <div onClick={(e)=>props.func(props.index)} className="deleteIconContainer"><img className="delete-icon" src={Vector}/> </div>
            </div>
            <div className="input-faq-ans">
            <div className="input-faq-ans-A">A</div>&emsp;
            <div className="input-faq-ans-content">{props.faq.ans}</div>
            <div></div>
            </div>
        </div>
    )
}

export default SingleInputFaq
