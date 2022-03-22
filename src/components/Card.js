import React from 'react';
import './Card.css';


const Card = ({name, email, id, userName}) => {
  return(
    <div className=' card tc bg-light-green dib br2 pa1 ma2 grow bw2 shadow-4'>
      <img className='img' src={`https://robohash.org/robootz${id}?size=150x150`} alt="robot-face"/>
      <div className='card-info'>
        <h3>{name}</h3>
        <p>Alias: {userName}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
export default Card