import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { nominate } from "../../actions/candidate.actions";

class Nominate extends React.Component {
    state = {
        place: "",
        position: "",
        msg: ""
    }

    static propTypes = {
        isnominated: PropTypes.bool,
        nominate: PropTypes.func.isRequired,
    }

    setPlace(e) {
        this.setState({
            place: e.target.value,
            msg: ""
        })
    }

    setPosition(e) {
        this.setState({
            position: e.target.value,
            msg: "",
        })
    }

    nominateCandidate(e) {
        e.preventDefault()
        if (this.state.place === "" || this.state.position === "") {
            this.setState({
                msg: "FILL ALL THE FIELDS"
            })
        } else {
            this.props.nominate(this.state.place, this.state.position);
        }
    }

    render() {
        //console.log("adjfh", this.props.isnominated);
        // const istrue = false;
        // if (this.props.isnominated === "true" || this.props.isnominated === true) {

        // }
        // console.log("istrue", istrue);


        if (this.props.isnominated === "true" || this.props.isnominated === true) {
            return (
                <div className="nominateDiv">
                    <p>YOU HAVE ALREADY NOMINATED</p>
                    <Link to="/candidate"><button> &lt;-GO BACK</button></Link>
                </div>
            );
            //return <Redirect to="/candidate" />
        } else {
            return (
                <div className="nominateDiv">
                    <form onSubmit={(e) => this.nominateCandidate(e)}>
                        <table>
                            <caption>NOMINATE</caption>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>SELECT PLACE</label>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        <input list="places" className="places" onChange={(e) => this.setPlace(e)} />
                                        <datalist id="places">
                                            <option key="HYDERABAD" value="HYDERABAD">HYDERABAD</option>
                                            <option key="NIZAMABAD" value="NIZAMABAD">NIZAMABAD</option>
                                            <option key="KAMAREDDY" value="KAMAREDDY">KAMAREDDY</option>
                                            <option key="RANGAREDDY" value="RANGAREDDY">RANGAREDDY</option>
                                        </datalist>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>SELECT POSITION</label>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        <input list="positions" className="positions" onChange={(e) => this.setPosition(e)} />
                                        <datalist id="positions">
                                            <option key="MLA" value="MLA">M.L.A</option>
                                            <option key="MP" value="MP">M.P</option>
                                        </datalist>
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="3">
                                        <button onClick={(e) => this.nominateCandidate(e)}>SUBMIT</button>
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
    isnominated: state.candidate.isnominated,
    error: state.candidate.error,
})

export default connect(mapStateToProps, { nominate })(Nominate);