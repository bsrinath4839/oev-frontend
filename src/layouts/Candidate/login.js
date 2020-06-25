import React from 'react';
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voteremail: "",
            voterid: "",
            voterpassword: "",
            isLoggedin: false,
            reqsent: false,
        }
    }

    setvoteremail(e) {
        this.setState({
            voteremail: e.target.value
        })
    }

    setvoterid(e) {
        this.setState({
            voterid: e.target.value
        })
    }

    setvoterpassword(e) {
        this.setState({
            voterpassword: e.target.value
        })
    }

    render() {
        if (this.state.isLoggedin) {
            return (
                <Redirect to="/voter" />
            );
        } else {
            return (
                <div className="voterlogindiv">
                    <form>
                        <label>Email : </label>
                        <input type="email" value={this.state.voteremail} onChange={(e) => this.setvoteremail(e)} />
                        <label>ID : </label>
                        <input type="text" value={this.state.voterid} onChange={(e) => this.setvoterid(e)} />
                        <label>Password : </label>
                        <input type="password" value={this.state.voterpassword} onChange={(e) => this.setvoterpassword(e)} />
                    </form>
                </div>
            );
        }
    }

}

export default Login;