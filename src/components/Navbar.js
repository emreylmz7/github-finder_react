import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <div className='bg-primary'>
        <nav className="navbar navbar-dark container">
          <a href="/" className="navbar-brand ">
            <i className={props.icon}></i> {props.title}
          </a>
        </nav>
    </div>
  )
}

Navbar.defaultProps = {
  icon:"bi bi-github",
  title:"Github Finder"
}

Navbar.propTypes = {
  icon : PropTypes.string.isRequired ,
  title : PropTypes.string
}

export default Navbar