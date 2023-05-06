import { useState } from "react";

function CreateArea(props)
{
    const [text, setText] = useState("");
    

    function changeTextAreaColor(){
        if(props.mode === 'light')
        {
            return {backgroundColor: 'white', color: 'black'}
        }
        if(props.mode === 'dark')
        {
            return {backgroundColor: '#343a40', color: 'white'};
        }
        else{
            return {backgroundColor: '#8B0000', color: '#FFC'};
        }
    }
    function handleUpClick(){
        setText(text.toUpperCase());
        props.changeAlert("Converted to Uppercase", "success");
    }
    function handleChange(event){
        setText(event.target.value);
    }

    function handleForm(event){
        //To prevent form from refereshing after submit button is pressed
        event.preventDefault();
    }

    function handleCap(){
        setText(text.toLowerCase());
        props.changeAlert("Converted to Lowercase", "success");
    }

    function extractEmail(){
        var re = /[^ ]+(?=)/g;

        text.match(re).forEach((email)=>{
            setText(email);
        });
        props.changeAlert("Extracted Email", "success");
    }

    return (
    <>
        <form className="container mt-3" id="myForm" onSubmit={handleForm}> 
            <h1>Enter your Text</h1>
            <div className="mb-3">
                <textarea style={changeTextAreaColor()}
                type="text" className="form-control" id="InputText" rows="8" 
                onChange={handleChange} value={text}/>
            </div>
            <button type="submit" className={`btn btn-${props.mode} my-3`} onClick={handleUpClick}>Convert To UpperCase</button>
            <button type="submit" className={`btn btn-${props.mode} mx-3 my-3`} onClick={handleCap}>Convert to LowerCase</button>
            <button type="submit" className={`btn btn-${props.mode} my-3`} onClick={extractEmail}>Extract Email</button>
        </form>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            {/* {To remove whitespaces and handle empty Strings} */}
            <p>{text.trim().length } characters and {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
        </div>
    </>
    );
}

export default CreateArea;