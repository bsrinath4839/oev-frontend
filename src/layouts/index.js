import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="App">
            <div className="header">
                OEV
            </div>
            <div className="topnav">
                <Link to="/" className="headerlink" >HOME</Link>
                <Link to="/voter" className="headerlink" >VOTER</Link>
                <Link to="/candidate" className="headerlink" >CANDIDATE</Link>
            </div>
        </div>
    );
}

export default Header;