import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import './App.css'
import '../components/ErrorBoundry';
import ErrorBoundry from "../components/ErrorBoundry";


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=>this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render(){
    const {robots, searchfield} = this.state;

    const filteredRobots = robots.filter( robot =>{ 
      let nameMatch = robot.name.toLowerCase().includes(searchfield.toLowerCase());
      let emailMatch = robot.email.toLowerCase().includes(searchfield.toLowerCase());
      let userNameMatch = robot.username.toLowerCase().includes(searchfield.toLowerCase());
      return  nameMatch + emailMatch + userNameMatch;
    })

    return !robots.length ? 
    <h1 className="tc f1">...Loading...</h1> :
    (
      <div className="tc" >
        <h1 className="f1">CardSearch</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots = {filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }

}

export default App;