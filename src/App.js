import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

 

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/> }/>
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
