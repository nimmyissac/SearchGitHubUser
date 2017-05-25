import React from 'react';

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }

  render() {
    
    
    var repo = this.props.repo;
    
    return (
      <div>

       
          <li className="list-group-item rowList">
            
            <div className="row" >
              <div className="col-md-4"> <strong>Name</strong>
              </div>
              <div className="col-md-8"> {repo.name}
              </div>
            </div>

            <div className="row" >
              <div className="col-md-4"> <strong>Full Name</strong>
              </div>
              <div className="col-md-8"> {repo.full_name}
              </div>
            </div>

            <div className="row" >
              <div className="col-md-4"> <strong>Date Created</strong>
              </div>
              <div className="col-md-8"> {repo.created_at}
              </div>
            </div>

            <div className="row" >
              <div className="col-md-4"><strong> Forks</strong>
              </div>
              <div className="col-md-8"> {repo.forks}
              </div>
            </div>

            <div className="row" >
              <div className="col-md-4"> <strong>Teams URL</strong>
              </div>
              <div className="col-md-8"> <a href={repo.teams_url}>{repo.teams_url}</a>
              </div>
            </div>

          </li>
        
       
   
        
  
      </div>
    );
  }
}


export default Repo;