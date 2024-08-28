import React, {useState} from 'react'



export default function TextForm(props) {
  
  let [text,setText] = useState("");
  let [disable,setDisabled] = useState("disabled");

  const handleUpClick = () =>{
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE","success");
  };

  const textCount= () =>{
    let textElement = document.getElementById("myBox");
    let textContent = textElement.textContent || textElement.innerText;

    if (textContent.trim().length > 0) {
      setDisabled(' ');
    }
    else 
      setDisabled('disabled');
  }

  const handleLowClick = () =>{
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };

  const handleClearClick = () =>{
    setText("");
    setDisabled('disabled');
    props.showAlert("TextBox cleared","success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to ClipBoard","success");
}


const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
}


  const handleOnChange = (event) =>{
    setText(event.target.value);
    textCount();
  };
  return (
    <>
     <div className="container mt-3" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-primary mx-1 my-1 ${disable}`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-primary mx-1 my-1 ${disable}`} onClick={handleLowClick}>Convert to Lowercase</button>
            <button className={`btn btn-primary mx-1 my-1 ${disable}`} onClick={handleClearClick}>Clear Text</button>
            <button className={`btn btn-primary mx-1 my-1 ${disable}`} onClick={handleCopy}>Copy Text</button>
            <button className={`btn btn-primary mx-1 my-1 ${disable}`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h3>Your Text Summary:</h3>
        <p>{text.trim().split(/\s+/).filter(word => word !== "").length} words and {text.trim().length} characters</p>
        <h4>Preview</h4>
        <p>{text.trim().length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div> 
    </>
    
  )
}
