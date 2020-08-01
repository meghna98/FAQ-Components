import React ,{useState,useRef}from 'react';
import './FaqDisplay.css';
import dropDown from '../images/dropDown.svg';

function SingleFaq(props) {
    const [height, setheight] = useState("0px")
    const content = useRef(null)
    function toggleButton(open){
        console.log("Came here",open)
        console.log(content.current.scrollHeight)
        setheight(open?`${content.current.scrollHeight}px`:'0px')
        console.log(height)
    }
    return (
        <div className={"singleFaqContainer "+(props.faq.open?"open":"")}>
            <div className="faq-ques">
            <div className="faq-ques-Q">Q</div>&emsp;
                <div className="faq-ques-content">{props.faq.ques}</div> 
            <div className="iconContainer" onClick={(e)=>{props.func(props.index);toggleButton(props.faq.open)}}><img className="dropDown-icon" src={dropDown}/> </div>
            </div>
            <div className="faq-ans" ref={content} style={{maxHeight:`${height}`,marginBottom:(height?'20px':'-10px')}}>
                <div className="faq-ans-A">A</div>&emsp;
                <div className="faq-ans-content">{props.faq.ans}</div>
                <div></div>
            </div>
        </div>
    )
}

export default SingleFaq
