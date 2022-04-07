import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import DarkMode from '../components/DarkMode'; 
import './App.css'
import '../components/ErrorBoundry';
import ErrorBoundry from "../components/ErrorBoundry";


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      users: [],
      searchfield: '',
    }
  }

  fetchUsers = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await resp.json();
    return this.setState({users: users})
  }

  componentDidMount() {
    /* fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=>this.setState({users: users})); */

    this.fetchUsers();
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render(){
    const {users, searchfield} = this.state;

    const filteredUsers = users.filter( user =>{ 
      let nameMatch = user.name.toLowerCase().includes(searchfield.toLowerCase());
      let emailMatch = user.email.toLowerCase().includes(searchfield.toLowerCase());
      let userNameMatch = user.username.toLowerCase().includes(searchfield.toLowerCase());
      return  nameMatch + emailMatch + userNameMatch;
    })

    return !users.length ? 
    <h1 className="tc f1">...Loading...</h1> :
    (
      <div className="innerbody">
      <DarkMode></DarkMode>
        <header>
          <h1 className="f1">{'BrukerSøk'}</h1>
          <SearchBox searchChange = {this.onSearchChange}/>  
        </header>
        <Scroll>
          <ErrorBoundry>
            <CardList users = {filteredUsers}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }

}

export default App;