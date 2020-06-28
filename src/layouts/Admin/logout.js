import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from "../../actions/admin.actions"


class Logout extends React.Component {
    state = {
        loggedin: true,
        error : ""
    }

    static propTypes = {
        loggedin: PropTypes.bool.isRequired,
        logout: PropTypes.func.isRequired,
    }

    adminlogout(state) {
        this.props.logout(state);
    }

    render() {

        if (this.props.loggedin === false) {
            return (
                <Redirect to="/admin"/>
            );
        } else {
            this.adminlogout();
        }
        return null;
    }
}


const mapStateToProps = (state) => ({
    loggedin: state.admin.loggedin,
    error: state.admin.error,

})

export default connect(mapStateToProps, { logout })(Logout);