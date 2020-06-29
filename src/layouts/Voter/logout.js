import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from "../../actions/voter.actions"


class Logout extends React.Component {
    state = {
        loggedin: true,
        error: ""
    }

    static propTypes = {
        loggedin: PropTypes.bool,
        logout: PropTypes.func.isRequired,
    }

    voterlogout() {
       // console.log("hiii");
        
        this.props.logout();
    }

    render() {       
       // console.log(this.props.loggedin);
        
        if (this.props.loggedin === "true" || this.props.loggedin === true) {
            this.voterlogout();
        } else {
            return <Redirect to="/voter" />
        }
        return null;
    }
}


const mapStateToProps = (state) => ({
    loggedin: state.voter.loggedin,
    error: state.voter.error,

})

export default connect(mapStateToProps, { logout })(Logout);