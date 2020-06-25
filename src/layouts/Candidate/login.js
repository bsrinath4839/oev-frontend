import React from 'react';
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { login } from "../../actions/candidate.actions"

class Login extends React.Component {
    state = {
        candidateemail: "",
        candidateid: "",
        candidatepassword: "",
        isLoggedin: false,
        reqsent: false,
        msg: ""
    }


    static propTypes = {
        login: PropTypes.func.isRequired,
        loggedin: PropTypes.bool.isRequired,
        error: PropTypes.string.isRequired,

    }

    setcandidateemail(e) {
        this.setState({
            candidateemail: e.target.value,
            msg: ""
        })
    }

    setcandidateid(e) {
        this.setState({
            candidateid: e.target.value,
            msg: ""
        })
    }

    setcandidatepassword(e) {
        this.setState({
            candidatepassword: e.target.value,
            msg: ""
        })
    }

    submit(e) {
        e.preventDefault();
        if (this.state.candidateid === "" || this.state.candidateemail === "" || this.state.candidatepassword === "") {
            this.setState({
                msg: "Please Fill all Fields"
            })
        } else {
            this.props.login(this.state.candidateid, this.state.candidateemail, this.state.candidatepassword);
        }
    }

    render() {
        if (this.state.isLoggedin) {
            return (
                <Redirect to="/candidate" />
            );
        } else {
            return (
                <div className="candidatelogindiv">
                    <form onSubmit={(e) => this.submit(e)}>
                        <table>
                            <caption>CANDIDATE LOGIN</caption>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>ID </label>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        <input type="text" value={this.state.candidateid} onChange={(e) => this.setcandidateid(e)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Email </label>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        <input type="email" value={this.state.candidateemail} onChange={(e) => this.setcandidateemail(e)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Password </label>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        <input type="password" value={this.state.candidatepassword} onChange={(e) => this.setcandidatepassword(e)} />
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="3">
                                        <button onClick={(e) => this.submit(e)} >SUBMIT</button>
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
                    </form>
                </div>
            );
        }
    }

}

const mapStateToProps = (state) => ({
    loggedin: state.candidate.loggedin,
    error: state.candidate.error,

})

export default connect(mapStateToProps, { login })(Login);