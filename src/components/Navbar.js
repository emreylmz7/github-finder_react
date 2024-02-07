import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component {
  render() {
    return (
      <div className='bg-primary'>
          <nav className="navbar navbar-dark container">
            <a href="#" className="navbar-brand ">
              <i className={this.props.icon}></i> {this.props.title}
            </a>
          </nav>
      </div>
      
    )
  }
}

Navbar.defaultProps = {
  icon:"bi bi-github",
  title:"Github Finder"
}

Navbar.propTypes = {
  icon : PropTypes.string.isRequired ,
  title : PropTypes.string
}
