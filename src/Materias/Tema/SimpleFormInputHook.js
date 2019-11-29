import React from 'react';
import useFormState from './Hooks/useFormState';

export default function SimpleFormInputHook() {
  const [email, updateEmail, resetEmail] = useFormState("");
  const [password, updatePassword, resetPassword] = useFormState("");
  return(
    <div>
      <h1>The email is: {email} and the password is: {password}</h1>
      <input type="text" value={email} onChange={updateEmail}/>
      <input type="text" value={password} onChange={updatePassword}/>
      <button onClick={resetPassword}>RESET PASSWORD</button>
      <button onClick={resetEmail}>RESET EMAIL</button>
    </div>
  )
}