import React from "react";
import Card from "./Card";
import './CardList.css';

const CardList = ({robots}) => {
  
  return (
    <div className="card-wrapper">
      {
        robots.map((user,i)=> {
          return (
            <Card 
              key={i} 
              id = {robots[i].id} 
              name = {robots[i].name} 
              email = {robots[i].email}
              userName = {robots[i].username}
            />
          )
        })
      }
    </div>
  );
}
export default CardList;