import React from "react";
import './Scroll.css'

const Scroll = (props) => {
  return (
    <div 
      style = {
        {overflowY: 'auto', 
        height: '450px',
        scrollBehavior: 'smooth',
        scrollbarColor: 'transparent transparent'
        }
      }
    > 
      {props.children}
    </div>
    
  ); 
};

export default Scroll;