import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from "../../actions/candidate.actions"


class Logout extends React.Component {
    state = {
        loggedin: true,
        error: ""
    }

    static propTypes = {
        loggedin: PropTypes.bool,
        logout: PropTypes.func.isRequired,
    }

    candidatelogout() {
       // console.log("hiii");
        
        this.props.logout();
    }

    render() {       
       // console.log(this.props.loggedin);
        
        if (this.props.loggedin === "true" || this.props.loggedin === true) {
            this.candidatelogout();
        } else {
            return <Redirect to="/candidate" />
        }
        return null;
    }
}


const mapStateToProps = (state) => ({
    loggedin: state.candidate.loggedin,
    error: state.candidate.error,

})

export default connect(mapStateToProps, { logout })(Logout);