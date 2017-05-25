import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      username: "nimmyissac",
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }
  //get user data from github
  getUserData() {
    $.ajax({
       url: "https://api.github.com/users/"+this.state.username+"?client_id="+this.props.clientId+"&client_secret="+this.props.clientSecret,
       data: "json",
       cache: false,
       success: function(data) {
          // var array = this.state.userData.slice();
          // array.push(data);
          console.log("user Data is ", data);
          this.setState({userData: data});
       }.bind(this),
       error: function(xhr, status, err) {
         this.setState({username: null});
         console.log("error in fetching userData , " ,err);
       }.bind(this)
    });
  }
  
  //get user Repos from github

  getUserRepos() {
     
      $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
      data: "json",
      cache: false,
      success: function(data) {
        console.log("userRepo is ", data);
        this.setState({userRepos: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({username: null});
      }.bind(this)
    });
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }
  
  handleFormSubmit(username) {
    console.log(username)
    this.setState({username: username}, function() {
       console.log("user name in this.state ", this.state.username);
       this.getUserData();
       this.getUserRepos();
    });
    
  }

  render() {
   return (
      <div>
       <Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
       <Profile {...this.state}/>
      </div>
    );
  }
}
App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}

App.defaultProps = {
   clientId: "61d18a02b3c0f8f6e6ad",
   clientSecret: "cb767d42d74b6e20ca498e2b1cb4df5aaa3ae5e2"
}

export default App;