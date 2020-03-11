import React from 'react';
import './App.css';
import GitHubCalendar from 'react-github-calendar';
import axios from "axios";
import Followers from "./components/Followers";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      main: [],
      followers: [],
      search: ''
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/NataliaBeckstead')
    .then(res => {
      this.setState({
        main: res.data
      })
      return res.data.followers_url
    })
    .then(res => {
      axios.get(res)
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
    })
  }

  changeHandler = e=> {
    this.setState({
      search: e.target.value
    })
    console.log(this.state.search)
  }

  formHandler = e =>{
    e.preventDefault();
    const setSearch = this.state.search;
    axios.get(`https://api.github.com/users/${setSearch}`)
    .then(res=> {
      this.setState({
        main: res.data
      })
      return res.data.followers_url
    })
    .then(res => {
      axios.get(res)
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.state.search} changeHandler={this.changeHandler} formHandler={this.formHandler} />
        <div className='container'>
          <div className='card'>
            <img src={this.state.main.avatar_url} />
            <div className='card-info'>
              <h3 className='name'>{this.state.main.name}</h3>
              <p className='username'>Profile: {this.state.main.login}</p>
              <p>{this.state.main.location}</p>
              <p><a href={this.state.main.html_url} /></p>
              <p>Followers: {this.state.main.followers}</p>
              <p>Following: {this.state.main.following}</p>
              <GitHubCalendar username={this.state.main.login} />
            </div>
          </div>

          <Followers followers={this.state.followers} />
        </div>

      </div>
    );
  }

  
}

export default App;
