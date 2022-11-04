
import './App.css';

import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import React, { useState } from 'react';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      // document.title = 'TextUtils is Amazing Mode';
        
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
          
      //   }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>

{/* <Navbar title="TextUtils" aboutText="About Textutils"/> */}

{/* <Navbar /> */}

{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />

<div className="container my-3">
{/* <Routes> */}
  {/* /users --> Component1 */}
  {/* /users/home --> Component2 */}
          {/* <Route exact path="/about" element={<About />}>
            
          </Route>
           */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text to analysis" mode={mode}/>}> */}
          <TextForm showAlert={showAlert} heading="Enter The Text to analysis" mode={mode}/>
          {/* </Route> */}
{/* </Routes> */}

</div>
{/* </Router> */}
    </>
  );
}

export default App;
