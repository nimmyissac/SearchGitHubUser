import React from 'react';

class Search extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    console.log("username in search ", username);
    if(!username) {
      alert("Please Enter a Valid UserName");
      return;
    }
    this.props.onFormSubmit(username);
    this.refs.username.value = "";
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search Github Users</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    );
  }
}

export default Search;