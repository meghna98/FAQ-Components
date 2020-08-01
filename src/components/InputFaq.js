import React ,{ useState }from 'react'
import Header from './Header';
import './InputFaq.css';
import SingleInputFaq from './SingleInputFaq';

function InputFaq() {
    const [newFaqs, setnewFaqs] = useState([])

    const [question, setquestion] = useState("")
    const [answer, setanswer] = useState("")

    const deleteFaq = (index)=>{
        let [...faqs] = newFaqs
        faqs.splice(index,1)
        setnewFaqs(faqs)
    }

    const faqSubmit = (e)=>{
        e.preventDefault()
        if(!(answer && question)){
            if(!question)
                document.myForm.question.focus()
            else if(!answer)
                document.myForm1.answer.focus()
            return
        }
            
        let newFaq = {
            ques:question,
            ans:answer
        }
        let [...newList] = newFaqs
        newList.push(newFaq)
        setnewFaqs(newList)
        setquestion('')
        setanswer('')
        document.myForm.question.focus()
    }
    return (
        <div className="faqsContainer">
            <Header/>
            <div className="inputFaqBox">
                {newFaqs.map((faq,index)=>{
                    return(<SingleInputFaq func={deleteFaq} faq={faq} index={index}/>)
                })
                }
                <div className="inputFaqContainer">
                    <form onSubmit={faqSubmit} name="myForm">
                    <div className="input-faq-ques-Q">Q</div>&emsp;
                    <input type="text"
                        className="input-box"
                        placeholder="Enter your question here..."
                        value={question}
                        name="question"
                        autoComplete="off"
                        onChange={(e)=>{console.log('Tes ');setquestion(e.target.value)}}
                        /><br/>
                    </form>
                    <form onSubmit={faqSubmit} name='myForm1'>
                    <span className="input-faq-ans-A">A</span>&emsp;
                    <input type="text"
                        className="input-box"
                        placeholder="Enter your answer here..."
                        value={answer}
                        name="answer"
                        autoComplete="off"
                        onChange={(e)=>{console.log(answer);setanswer(e.target.value)}}
                        />
                    <div onClick={faqSubmit} className="addNewInput">+</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InputFaq
