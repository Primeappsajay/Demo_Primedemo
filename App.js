import "./App.css";
import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import TextForm from './Component/TextForm'
import Alert from "./Component/Alert";
// import About from "./Component/About";

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
// } from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
    }

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "grey"
            showAlert("dark  mode hase been enable", "danger");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white"
            showAlert("light mode hase been enable", "success");
        }
    }
    return (
        <>
            <Navbar title="PrimeApps" aboutText="Home" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-3" >
                < TextForm showAlert={showAlert} heading="Enter the text to analiys" mode={mode} />
            </div>

            {/* <Router>
                 <Navbar title="PrimeApps" aboutText="Home" mode={mode} toggleMode={toggleMode} />
                 <Alert alert={alert} />
                 <div className="container my-3" >
                     <Routes>
                         <Route path="/About" element={< About />} />
                         <Route path="/" element={< TextForm showAlert={showAlert} heading="Enter the text to analiys" mode={mode} />} />
                     </Routes>
                 </div>
             </Router> */}
        </>
    );
}

export default App;