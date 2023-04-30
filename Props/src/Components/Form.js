// import Button from "./Button"
import { useState } from 'react'
import Paragraph from "./Paragraph"
import ButtonArea from "./ButtonArea"
function Form(props) {
    const [text, settext] = useState("")
    const [result, setresult] = useState("")
    return (
        <>
            <div className="mb-3">
                <center> <Paragraph value="Enter the value" color={props.colorComponents}></Paragraph></center>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={setstate} value={text}></textarea>
            </div>
            <div className="mb-9">
                <center><Paragraph value="Result" color={props.colorComponents}></Paragraph></center>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={result} ></textarea>

                <div className="d-flex">
                    <ButtonArea buttonArray={[{ name: "To uppercase", onClick: setresult1, className: "btn btn-primary" }, { name: "clear text", onClick: clearText, className: "btn btn-primary" }, { name: "to lowercase", onClick: lowerCase, className: "btn btn-primary" }]}></ButtonArea>
                </div>

            </div>

            <div >
                <Paragraph value={`word-count ${text.split(" ").length} letter-count ${text.length}`}></Paragraph>
            </div>



        </>
    )
    function setstate(event) {
        settext(event.target.value)


    }
    function setresult1() {
        console.log("hi")
        let temptext = text.toUpperCase()
        setresult(temptext)


    }
    function lowerCase() {
        let temptext = text.toLowerCase()
        setresult(temptext)


    }
    function clearText() {
        settext("")
        setresult("")
    }


}

export default Form