import React from 'react';
import './App.css';
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import whatsapplogo from './whatsapplogo.png'
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
import CandidateLogout from "./layouts/Candidate/logout";

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
          <Route exact path="/candidate/logout" component={CandidateLogout} />
          <Route exact path="/candidate/nominate" component={CandidatesNominate} />

        </div>
        <div className="logosDiv">
          <img src={logo1} className="logo" alt={logo1} />
          <hr />
          <img src={logo2} className="logo" alt={logo2} />
          <hr />
        </div>
        <div className="footer">
          <hr />
            &copy; <a href="http://github.com/bsrinath4839" target="_blank" rel="nofollow noopener noreferrer" >bsrinath4839</a>
          <div className="logoslinks">
          <a href="https://api.whatsapp.com/send?phone=+918096873682&text='Hi,%20I%20Need%20Help'" target="_blank" className="whatsapplogo" rel="nofollow noopener noreferrer">
              <img src={whatsapplogo} className="whatsapplogo" alt={whatsapplogo} />
            </a>
          </div>
          <hr />
        </div>
      </div>
    </Router>
  );
}

export default App;
