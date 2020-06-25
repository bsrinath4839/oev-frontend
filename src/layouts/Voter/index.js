import React from 'react';
import { Link } from 'react-router-dom';

function Voter(props) {
    //console.log(props);
    const isVoter = localStorage.getItem('voterloggedin');
    if (isVoter) {
        return (
            <div className="voter">
                <Link className="voterLinks" to="/voter/candidates" >CANDIDATES</Link>
                <Link className="voterLinks" to="/voter/vote" >VOTE</Link>
                <Link className="voterLinks" to="/voter/logout" >LOGOUT</Link>
            </div>
        );
    } else {
        return (
            <div className="voter">
                <Link className="voterLinks" to="/voter/login" >LOGIN</Link>
                <Link className="voterLinks" to="/voter/register" >REGISTER</Link>
            </div>
        );
    }

}

export default Voter;

