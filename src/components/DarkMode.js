import React from "react";
import './DarkMode.css';

const toggleDarkMode = () => {
  const body = document.querySelector('body');
  return body.classList.toggle('light')
}

const DarkMode = () => {

  return(
    /* <div className="button-container"> */
  <button 
    className="button-dark" 
    onClick={toggleDarkMode}
  >
    {'Toggle dark mode'}
  </button>
/* </div> */
  );
}

export default DarkMode;