import React from "react";
import Card from "./Card";
import './CardList.css';

const CardList = ({users}) => {
  
  return (
    <div className="card-wrapper">
      {
        users.map((user,i)=> {
          return (
            <Card 
              key={i} 
              id = {users[i].id} 
              name = {users[i].name} 
              email = {users[i].email}
              userName = {users[i].username}
            />
          )
        })
      }
    </div>
  );
}
export default CardList;