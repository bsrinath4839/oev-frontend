import React from 'react';
import { Redirect } from 'react-router-dom';
import PropsTypes from "prop-types"
import { connect } from "react-redux"
import { register } from "../../actions/voter.actions"

class Register extends React.Component {
    state = {
        voterid: "",
        voteremail: "",
        votername: "",
        voterpassword: "",
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

    registervoter(e) {
        e.preventDefault();
        if (this.state.voterid === "" || this.state.voteremail === "" || this.state.votername === "" || this.state.voterpassword === "") {
            this.setState({
                msg: "Fill All the Fields"
            })
        } else {
            this.props.register(
                this.state.voterid,
                this.state.voteremail,
                this.state.votername,
                this.state.voterpassword
            );
        }

    }

    render() {
        if (this.props.isregisterd) {
            return (
                <Redirect to="/voter/login" />
            );
        } else {
            return (
                <div className="voterregisterDiv">
                    <form onSubmit={(e) => this.registervoter(e)} >
                        <table>
                            <caption>VOTER REGISTER</caption>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>ID</label>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={this.state.voterid}
                                            name="voterid"
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
                                            value={this.state.votername}
                                            name="votername"
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
                                            value={this.state.voteremail}
                                            name="voteremail"
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
                                            value={this.state.voterpassword}
                                            name="voterpassword"
                                            onChange={(e) => this.change(e)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="3">
                                        <button onClick={(e) => this.registervoter(e)}>SUBMIT</button>
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
    isregisterd: state.voter.isregisterd,
    error: state.voter.error,

})

export default connect(mapStateToProps, { register })(Register);