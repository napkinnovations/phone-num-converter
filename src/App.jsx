import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [phoneNum, setPhoneNum] = useState("");
    const [result, setResult] = useState("");

    function handleSubmit(e){
        e.preventDefault();     // to prevent refreshing
        let result = "";
        const digitsOnly = phoneNum.replace(/\D/g, "");
        setResult(digitsOnly);
    }

    function handleChange(e){
        setPhoneNum(e.target.value);
//         setResult("");
    }
    return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
            <div>Enter Phone Number:</div>
            <input type="text" value={phoneNum} onChange={handleChange} placeholder="(000)-000-0000"></input>
            <div><button type="submit">Submit</button></div>
        </form>
        <div>Result:</div>
        <label>{result}</label>
      </div>
    </>
    )
}

export default App
