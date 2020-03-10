import React from 'react';
import './App.css';
import GitHubCalendar from 'react-github-calendar';
import axios from "axios";

class App extends React.Component {
  state = {
    userName: '',
    login: '',
    avatar_url: '',
    location: '',
    html_url: '',
    followers: '',
    following: '',
    bio: ''
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/NataliaBeckstead")
      .then(response => {
      console.log(response.data);
      this.setState({
        userName: (response.data.name),
        login: (response.data.login),
        avatar_url: (response.data.avatar_url),
        location: (response.data.location),
        html_url: (response.data.html_url),
        followers: (response.data.followers),
        following: (response.data.following),
        bio: (response.data.bio)
      })
      })
      .catch(error => {
      console.log("the data was not returned", error);
      });
  }
  

  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='card'>
            <img src={this.state.avatar_url} />
            <div className='card-info'>
              <h3 className='name'>{this.state.userName}</h3>
              <p className='username'>Profile: {this.state.login}</p>
              <p>{this.state.location}</p>
              <p><a href={this.state.html_url} /></p>
              <p>Followers: {this.state.followers}</p>
              <p>Following: {this.state.following}</p>
              <GitHubCalendar username={this.state.login.toString()} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  
}

export default App;
