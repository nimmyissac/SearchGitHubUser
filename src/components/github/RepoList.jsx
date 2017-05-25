import React from 'react';
import ReactDOM from 'react-dom';
//import Repo from 'Repo.jsx'
import Repo from './Repo.jsx';


class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }

  render() {
    
    var repos = this.props.userRepos || [];

    return (
      <div>
       <div className="row">
         <div className="col-md-12">
             <ul className="list-group">
               {
                repos.map(function(repo, i){
                  return <Repo repo={repo} key={repo.id}/>;
                })
               }
             </ul>
         </div>
      </div>
      </div>
    );
  }
}

export default RepoList;