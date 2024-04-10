import React, { useState } from "react";
import './PasswordOptions.css';
import Password from "../Password/Password";

const PasswordOptions = () => {
    const [value, setValue] = useState(4);
    const [useUppercase, setUseUppercase] = useState(true);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);

  return (
    <>
        <Password length={value} hasUppercase={useUppercase} hasLowercase={useLowercase} hasNumbers={useNumbers} hasSymbols={useSymbols}/>
        <p>Password Length: {value}</p>
        <input type='range' min='6' max='20' step='1' id='slider' value={value} onChange={(e) => setValue(e.target.value)}></input>

        <div className='PasswordOptions'>
        <div className='Option'>
        <label>
          Uppercase
        </label>
        <input className='uppercase' type='checkbox' checked={useUppercase} onChange={() => setUseUppercase(!useUppercase)}/>
        </div>
        <div className='Option'>
        <label>
          Lowercase
        </label>
        <input type='checkbox' className="lowercase" checked={useLowercase} onChange={() => setUseLowercase(!useLowercase)}/>
        </div>
        <div className='Option'>
        <label>
          Numbers
        </label>
        <input type='checkbox' className="numbers" checked={useNumbers} onChange={() => setUseNumbers(!useNumbers)}/>
        </div>
        <div className='Option'>
        <label>
          Special Characters
        </label>
        <input type='checkbox' className="specialChar" checked={useSymbols} onChange={() => setUseSymbols(!useSymbols)}/>
        </div>
      </div>

      </>
    )
  }

  export default PasswordOptions;

