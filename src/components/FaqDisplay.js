import React, { useState, useRef } from 'react'
import './FaqDisplay.css';
import SingleFaq from './SingleFaq'

function FaqDisplay() {
    const [faqs, setfaqs] = useState([
        {
            ques:"\Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            ans:"\Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            open:false
        },
        {
            ques:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            open:false
        },
        {
            ques:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            open:false
        }
    ])

    // const content = useRef(null)

    const toggleOpen=(index,height)=>{
        setfaqs(faqs.map((faq,i)=>{
            if(i==index)
                faq.open = !faq.open
            
            return faq
        }))
    }
    return(
        <div className="faqDisplayContainer">
            <div className="faqSubDiv">
            <div><h4>Questions and Answers</h4></div>
            <div className="faqDisplay">{faqs.map((faq,index)=>{
                return (<SingleFaq faq={faq} index={index} func={toggleOpen}/>)
            })}</div>
            </div>
        </div>
    )
}

export default FaqDisplay
