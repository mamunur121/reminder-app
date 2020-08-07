import React from 'react';
import {Link} from "react-router-dom";

class BackButton extends React.Component{
  render() {
    const {goto} = this.props;
    return(
        <div>
          <Link
              style={{textDecoration: 'none'}}
              to={goto}>
            <div className="ui buttons">
              <button className="ui labeled icon button">
                <i className="left chevron icon"/>
                Back
              </button>
            </div>
          </Link>
        </div>

    );
  }
}

export default BackButton;