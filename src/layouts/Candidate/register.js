import React from 'react';
import { Redirect } from 'react-router-dom';
import PropsTypes from "prop-types"
import { connect } from "react-redux"
import { register } from "../../actions/candidate.actions"

class Register extends React.Component {
    state = {
        candidateid: "",
        candidateemail: "",
        candidatename: "",
        candidatepassword: "",
        msg: ""
    }

    static propsTypes = {
        isregisterd: PropsTypes.bool.isRequired,

    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value,
            msg: ""
        })
    }

    registercandidate(e) {
        e.preventDefault();
        if (this.state.candidateid === "" || this.state.candidateemail === "" || this.state.candidatename === "" || this.state.candidatepassword === "") {
            this.setState({
                msg: "Fill All the Fields"
            })
        } else {
            this.props.register(
                this.state.candidateid,
                this.state.candidateemail,
                this.state.candidatename,
                this.state.candidatepassword
            );
        }

    }

    render() {
        if (this.props.isregisterd) {
            return (
                <Redirect to="/candidate/login" />
            );
        } else {
            return (
                <div className="candidateregisterDiv">
                    <form onSubmit={(e) => this.registercandidate(e)} >
                        <table>
                            <caption>CANDIDATE REGISTER</caption>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>ID</label>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={this.state.candidateid}
                                            name="candidateid"
                                            onChange={(e) => this.change(e)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>NAME</label>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={this.state.candidatename}
                                            name="candidatename"
                                            onChange={(e) => this.change(e)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>E-MAIL</label>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        <input
                                            type="email"
                                            value={this.state.candidateemail}
                                            name="candidateemail"
                                            onChange={(e) => this.change(e)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>PASSWORD</label>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        <input
                                            type="password"
                                            value={this.state.candidatepassword}
                                            name="candidatepassword"
                                            onChange={(e) => this.change(e)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="3">
                                        <button onClick={(e) => this.registercandidate(e)}>SUBMIT</button>
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
    isregisterd: state.candidate.isregisterd,
    error: state.candidate.error,

})

export default connect(mapStateToProps, { register })(Register);