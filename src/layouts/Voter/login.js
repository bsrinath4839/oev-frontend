import React from 'react';
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { login } from "../../actions/voter.actions"


class Login extends React.Component {

    state = {
        voterid: "",
        voteremail: "",
        voterpassword: "",
        msg: ""
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        loggedin: PropTypes.bool,
    }

    setVoterid(e) {
        this.setState({
            voterid: e.target.value,
            msg: ""
        })
    }

    setVoterEmail(e) {
        this.setState({
            voteremail: e.target.value,
            msg: ""
        })
    }
    setVoterPassword(e) {
        this.setState({
            voterpassword: e.target.value,
            msg: ""
        })
    }

    submit(e) {
        e.preventDefault();
        if (this.state.voterid === "" || this.state.voteremail === "" || this.state.voterpassword === "") {
            this.setState({
                msg: "Please Fill All the fields"
            })
        } else {
            this.props.login(this.state.voterid, this.state.voteremail, this.state.voterpassword);
        }
    }

    render() {
        if (this.props.loggedin) {
            return <Redirect to="/voter" />
        } else {
            return (
                <div className="voterLoginDiv">
                    <form onSubmit={(e) => this.submit(e)}>
                        <table>
                            <caption>VOTER LOGIN</caption>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>ID</label>
                                    </td>
                                    <td>
                                        :
                                </td>
                                    <td>
                                        <input type="text" value={this.state.voterid} onChange={(e) => this.setVoterid(e)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>E-MAIL</label>
                                    </td>
                                    <td>
                                        :
                                </td>
                                    <td>
                                        <input type="email" value={this.state.voteremail} onChange={(e) => this.setVoterEmail(e)} />
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
                                        <input type="password" value={this.state.voterpassword} onChange={(e) => this.setVoterPassword(e)} />
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
                            </tbody>
                        </table>
                    </form>
                </div>
            );
        }
    }

}

const mapStateToProps = (state) => ({
    loggedin: state.voter.loggedin
})

export default connect(mapStateToProps, { login })(Login);