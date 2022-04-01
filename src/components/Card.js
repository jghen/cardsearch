import React from 'react';
import './Card.css';


const Card = ({name, email, id, userName}) => {
  return(
    <div className=' card tc br2 grow shadow-1'>
      <img className='img' src={`https://robohash.org/robootz${id}?size=125x125`} alt="robot-face"/>
      <div className='card-info'>
        <h3>{name}</h3>
        <p>{'Alias: ' + userName}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
export default Card;