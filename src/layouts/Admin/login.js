import React from 'react';
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { login } from "../../actions/admin.actions"


class Login extends React.Component {

    state = {
        adminemail: "",
        adminpassword: "",
        msg: ""
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        loggedin: PropTypes.bool.isRequired,
        error : PropTypes.string.isRequired,
        
    }

    setAdminEmail(e) {
        this.setState({
            adminemail: e.target.value,
            msg: ""
        })
    }
    setAdminPassword(e) {
        this.setState({
            adminpassword: e.target.value,
            msg: ""
        })
    }

    submit(e) {
        e.preventDefault();
        if (this.state.adminemail === "" || this.state.adminpassword === "") {
            this.setState({
                msg: "Please Fill all Fields"
            })
        } else {
            this.props.login(this.state.adminemail, this.state.adminpassword);
        }
    }

    render() {
        if (this.props.loggedin) {
            return <Redirect to="/admin" />
        } else {
            return (
                <div className="adminLoginDiv">
                    <table>
                        <caption>ADMIN LOGIN</caption>
                        <tbody>
                            <tr>
                                <td>
                                    <label>E-MAIL</label>
                                </td>
                                <td>
                                    :
                                </td>
                                <td>
                                    <input type="email" value={this.state.adminemail} onChange={(e) => this.setAdminEmail(e)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>PASSWORD</label>
                                </td>
                                <td>
                                    :
                                </td>
                                <td>
                                    <input type="password" value={this.state.adminpassword} onChange={(e) => this.setAdminPassword(e)} />
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="3">
                                    <button onClick={(e) => this.submit(e)}>SUBMIT</button>
                                </th>
                            </tr>
                            <tr>
                                <th colSpan="3">
                                    <p>{this.state.msg}</p>
                                </th>
                            </tr>
                            <tr>
                                <th colSpan="3">
                                    <p>{this.props.error}</p>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }

}

const mapStateToProps = (state) => ({
    loggedin: state.admin.loggedin,
    error : state.admin.error,
    
})

export default connect(mapStateToProps, { login })(Login);