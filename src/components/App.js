import Navbar from './Navbar'
import CreateArea from './CreateArea';
import { useState } from 'react';
import Alert from './Alert';
// import About from './About';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  function showText(message, clr){
    setAlert({
      msg: message,
      color: clr
    });

    setTimeout(()=>{setAlert(null)}, 2500);
  }

  function handleClick(){
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
      document.title = 'TextUtils * Dark';
      showText("Dark Mode is Enabled", "dark");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'TextUtils * Light';
      showText("Light Mode is Enabled", "primary");
    }
  }

  function handleRed(){
    if((mode === 'light')||(mode === 'dark'))
    {
      setMode('warning');
      document.body.style.backgroundColor = '#8B0000';
      document.body.style.color = '#FFC';
      showText("Red Mode is Enabled", "warning");
      document.title = 'TextUtils * Red';
    }
    else if(mode === 'warning')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showText("Light Mode is Enabled", "primary"); 
      document.title = 'TextUtils * Light';
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
        <Navbar mode={mode} onClick={handleClick} redClick={handleRed}/>
        <Alert alert={alert}/>
        {/* <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/" element={ */}
              <CreateArea mode={mode} changeAlert={showText}/>
              {/* }/> */}
        {/* </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
