import React from "react";
import CopyButton from "../CopyButton/CopyButton";



const Password = (props) => {

    const generatePassword = (length, hasUppercase, hasLowercase, hasNumbers, hasSymbols) => {

      let characters ='';

      if(hasUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if(hasLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
      if(hasNumbers) characters += '0123456789';
      if(hasSymbols) characters += '!@#$%^&*()';

      let newPassword = '';
      const charactersLength = characters.length;
      for (let i=0; i < length; i++){
        newPassword+= characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      return newPassword;
    }
  
    return (
      <>
        <input value={generatePassword(props.length, props.hasUppercase, props.hasLowercase, props.hasNumbers, props.hasSymbols)}></input>
         <CopyButton />
      </>
    );
  }

  export default Password;