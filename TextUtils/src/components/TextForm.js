import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpper = (event) =>{
        event.preventDefault();
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase")
    }

    function handleLower(event){
        event.preventDefault();
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase")
    }

    const reverseString = (event) =>{
        event.preventDefault();
        let reversedText = ""
        for(var i = text.length-1;i >= 0;i--){
            reversedText += text[i];
            setText(reversedText)
        }
        props.showAlert("Reversed Text")
        
    }    

    const findLength = (event) =>{
        event.preventDefault();
        let len = text.length;
        setText('length of your text is: ' +len)
    }

    const copyText = (event) => {
        event.preventDefault()
        var text = document.getElementById("myText")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied")
    }
    const clearText = (event) =>{
        event.preventDefault();
        let clearedText = ''
        setText(clearedText);
        props.showAlert("Text cleared")
    }
    const hanldeOnChange = (event) =>{
        
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <>
        <div>
            <form>
                <div className="form-group" style={{color: props.mode==='dark'?'white':'black'}}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control my-3" value={text} onChange={hanldeOnChange} style={{backgroundColor: props.mode==='dark'?'#002D62':'white', color:props.mode==='dark'?'white':'black'}} id="myText" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-2" onClick={handleUpper}>Convert to Uppercase</button>
                <button className="btn btn-secondary mx-1 my-2" onClick={handleLower}>Convert to Lowercase</button>
                <button className='btn btn-success mx-1 my-2' onClick={reverseString}>Reverse </button>
                <button className='btn btn-warning mx-1 my-2' onClick={findLength}>Length</button>
                <button className='btn btn-info mx-1 my-2' onClick={copyText} >Copy</button>
                <button className='btn btn-danger mx-1 my-2' onClick={clearText}> Claer</button>

            </form>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}v>
        <h1>Your Text Summary</h1>
        <p>{text.split(' ').length} words and {text.length} Characters</p>
        <p>Reading Time: {0.008 * text.split(' ').length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'No Text Entered'}</p>
        </div>
        </>
    )
}
