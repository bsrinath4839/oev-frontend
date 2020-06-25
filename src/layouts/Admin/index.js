import React from 'react';
import { Link } from 'react-router-dom';

function Voter(props) {
    const isAdmin = localStorage.getItem('adminloggedin')
    if (isAdmin) {
        return (
            <div className="admin">
                <Link className="adminLinks" to="/admin/logout" >LOGOUT</Link>
                <Link className="adminLinks" to="/results" >RESULTS</Link>
            </div>
        );
    } else {
        return (
            <div className="admin">
                <Link className="adminLinks" to="/admin/login" >LOGIN</Link>
            </div>
        );
    }
}

export default Voter;

