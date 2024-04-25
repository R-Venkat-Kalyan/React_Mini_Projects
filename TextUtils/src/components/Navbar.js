import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    // Determine the text color based on the mode
    const textColorClass = props.mode === 'light' ? 'text-dark' : 'text-light';

    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand ${textColorClass}`} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active ${textColorClass}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${textColorClass}`} to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch ${textColorClass}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

// setting types of props
Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired,
};

// providing default values for props
Navbar.defaultProps = {
    title: 'Title Here',
    about: 'About Here'
};
