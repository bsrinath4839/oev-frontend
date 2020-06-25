import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./layouts";
import Admin from "./layouts/Admin";
import AdminLogin from "./layouts/Admin/login";
import AdminLogout from "./layouts/Admin/logout";
import Results from "./layouts/Admin/results";

import Voter from "./layouts/Voter";
import VoterRegister from "./layouts/Voter/register";
import VoterLogin from "./layouts/Voter/login";
import VoterVote from "./layouts/Voter/vote";
import CandidatesList from "./layouts/Voter/candidates";
import VoterLogout from "./layouts/Voter/logout";

import Candidate from "./layouts/Candidate";
import CandidateRegister from "./layouts/Candidate/register";
import CandidateLogin from "./layouts/Candidate/login";
import CandidatesNominate from "./layouts/Candidate/nominate";

function App(props) {
  return (
    <Router>
      <div className="App">
        <div className="row">
          <Route path="/" component={Header} />
          <Route exact path="/admin/" component={Admin} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/logout" component={AdminLogout} />
          <Route exact path="/results" component={Results} />

          <Route exact path="/voter" component={Voter} />
          <Route exact path="/voter/register" component={VoterRegister} />
          <Route exact path="/voter/login" component={VoterLogin} />
          <Route exact path="/voter/vote" component={VoterVote} />
          <Route exact path="/voter/candidates" component={CandidatesList} />
          <Route exact path="/voter/logout" component={VoterLogout} />

          <Route exact path="/candidate" component={Candidate} />
          <Route exact path="/candidate/register" component={CandidateRegister} />
          <Route exact path="/candidate/login" component={CandidateLogin} />
          <Route exact path="/candidate/nominate" component={CandidatesNominate} />

        </div>
        <div className="footer">
          &copy; <a href="http://github.com/bsrinath4839" target="_blank" rel="noopener noreferrer">bsrinath4839</a>
        </div>
      </div>
    </Router>
  );
}

export default App;
