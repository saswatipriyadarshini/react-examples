import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component{
  constructor(){
    super();
    this.state ={
      title: ''
    }
  }

  render(){
    return(
      <div>
        <nav className=" header navbar navbar-dark bg-dark">
          <div className="container">
            <div className="row m-auto">
              <i className="fa fa-hand-pointer-o fa-4x text-white"></i>
              <h2 className="h1 ml-2 my-auto text-light" href="/">{this.props.title}</h2>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


Header.defaultProps = {
  title: 'Title',
};

Header.propTypes = {
  title: PropTypes.strings
};
export default Header;