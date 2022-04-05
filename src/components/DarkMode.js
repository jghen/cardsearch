import React from "react";
import './DarkMode.css';

// dark class initial toggle: 
//if not function toggleDarkMode won't work
{document.querySelector('body').classList.toggle('dark'); }

const toggleDarkMode = () => {
  const body = document.querySelector('body');
  const btn = document.querySelector('.button-dark');

  if (body.classList.value === "dark") {
    btn.textContent = 'Dark mode';
    body.classList.toggle('light');
    body.classList.toggle('dark');
    return;
  }

  if (body.classList.value === "light") {
    btn.textContent = 'Light mode';
    body.classList.toggle('light');
    body.classList.toggle('dark');
    return;
  }
}

const DarkMode = () => {

  return(
    /* <div className="button-container"> */
  <button 
    className="button-dark" 
    onClick={toggleDarkMode}
  > {'Light mode'}
  </button>
/* </div> */
  );
}

export default DarkMode;