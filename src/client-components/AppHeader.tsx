'use client';

import AppLogo from "./AppLogo";

export default function AppHeader() {

 const showMsg = () => {
    alert("NB-Hospital");   
 }

  return (
    <div>
          <h1 className="header">NB-HOSPITAL</h1>
         
          <AppLogo />
          <button onClick={showMsg}>Click Me</button>
    </div>
  );
}
