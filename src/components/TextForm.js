import React , {useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState('');
    
    const  handleUpClick = () => {
      //  console.log("Uppercase was clicked  " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");

    }

    const  handleLoClick = () => {
          let newText = text.toLowerCase();
          setText(newText);
          props.showAlert("Converted to lowercase!", "success");


      }
      const  handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");

    }
    const  handleOnChange = (event) => {
      //  console.log(" On change ");
        setText(event.target.value);
    }
    const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(text); 
      props.showAlert("Text Copied!", "success"); 
      document.title = 'TextUtils - TextCopied';
 /*    setInterval(() => {
        document.title = 'TextUtils - TextCopied Succesfully';
      }, 2000);
      setInterval(() => {
        document.title = 'TextUtils - Copying Text';
      }, 1500); */
    }   

    const handleSpeak = () => {
      if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          speechSynthesis.speak(utterance);
         
      } else {
          alert('Speech synthesis is not supported in your browser.');
      }
  }
  return (
    <>
    <div className="container" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor : props.mode==='dark' ? 'grey' : 'white' , color : props.mode==='dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handleSpeak}>Speak</button>


    </div>
    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
    <h2>Your Text Summary</h2>
    {text.length > 0 && (
        <>
            <p>{text.trim().split(/\s+/).length} words & {text.length} characters</p>
            <p>{(0.008 * text.trim().split(/\s+/).length).toFixed(2)} Minutes Read</p>
        </>
    )}
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
</div>


    </>
  )
}
