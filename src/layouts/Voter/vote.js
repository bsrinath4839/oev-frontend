import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { vote } from "../../actions/voter.actions"

class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static propTypes = {
        vote: PropTypes.func.isRequired,
        isvoted: PropTypes.bool
    }

    voteCandidate(candidate) {
        // console.log(candidate)
        this.props.vote(candidate.candidateid, candidate.candidatename, candidate.place, candidate.position);
    }

    render() {
        if (this.props.isvoted === 'true' || this.props.isvoted === true) {
            console.log("votefor" , this.props);
            
            return (
                <div className="voteDiv">
                    <p>You have already Voted</p>
                    <table width="40%">
                        <caption>Candidate Details</caption>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>:</td>
                                <td>{this.props.voteFor.candidateid}</td>
                            </tr>
                            <tr>
                                <td>NAME</td>
                                <td>:</td>
                                <td>{this.props.voteFor.candidatename}</td>
                            </tr>
                            <tr>
                                <td>PLACE</td>
                                <td>:</td>
                                <td>{this.props.voteFor.place}</td>
                            </tr>
                            <tr>
                                <td>POSITION</td>
                                <td>:</td>
                                <td>{this.props.voteFor.position}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        } else {
            if (this.props.location.state === undefined) {
                return <Redirect to="/voter/candidates" />
            } else {
                // console.log(props.location.state.candidate);
                const { candidateid, candidatename, place, position } = this.props.location.state.candidate;
                // console.log({ candidateid, candidatename, place, position });

                //render
                return (
                    <div className="voteDiv">
                        <table width="30%">
                            <caption> Candidate Details</caption>
                            <tbody>
                                <tr>
                                    <td>ID</td>
                                    <td>:</td>
                                    <td>{candidateid}</td>
                                </tr>
                                <tr>
                                    <td>NAME</td>
                                    <td>:</td>
                                    <td>{candidatename}</td>
                                </tr>
                                <tr>
                                    <td>PLACE</td>
                                    <td>:</td>
                                    <td>{place}</td>
                                </tr>
                                <tr>
                                    <td>POSITION</td>
                                    <td>:</td>
                                    <td>{position}</td>
                                </tr>
                                <tr>
                                    <th colSpan="3">
                                        <button onClick={() => this.voteCandidate({ candidateid, candidatename, place, position })}>CONFIRM VOTE</button>
                                    </th>
                                </tr>
                                <tr>
                                    <th colSpan="3">
                                        <Link to="/voter/candidates">SELECT OTHER</Link>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            }
        }
    }
}


const mapStateToProps = (state) => ({
    voteFor: state.voter.voteFor,
    isvoted: state.voter.isvoted,

})

export default connect(mapStateToProps, { vote })(Vote);