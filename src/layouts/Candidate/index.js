import React from 'react';
import { Link } from 'react-router-dom';

function Candidate(props) {
    //console.log(props);
    const isCandidate = localStorage.getItem('candidateloggedin');
    if (isCandidate) {
        return (
            <div className="candidate">
                <Link className="candidateLinks" to="/candidate/nominate" >NOMINATE</Link>
                <Link className="candidateLinks" to="/candidate/logout" >LOGOUT</Link>
            </div>
        );
    } else {
        return (
            <div className="candidate">
                <Link className="candidateLinks" to="/candidate/login" >LOGIN</Link>
                <Link className="candidateLinks" to="/candidate/register" >REGISTER</Link>
            </div>
        );
    }

}

export default Candidate;