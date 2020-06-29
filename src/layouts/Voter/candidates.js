import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { getCandidates } from '../../actions/voter.actions'

class Candidates extends React.Component {

    static propTypes = {
        candidates: PropTypes.array.isRequired,
        getCandidates: PropTypes.func.isRequired,
    };

    getCandidatesList() {
        this.props.getCandidates();
    }

    render() {
        console.log("ccc", this.props.candidates);

        if (this.props.candidates.length > 0) {
            return (
                <div className="candidatesDiv">
                    <button onClick={() => this.getCandidatesList()} >GET CANDIDATES LIST</button>
                    <table width="40%">
                        <caption>CANDIDATES</caption>
                        <tbody>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    NAME
                                </th>
                                <th>
                                    PLACE
                                </th>
                                <th>
                                    POSITION
                                </th>
                                <th>
                                    VOTE
                                </th>
                            </tr>

                            {this.props.candidates.map(candidate => (
                                <tr key={candidate._id}>
                                    <th>
                                        {candidate.candidateid}
                                    </th>
                                    <th>
                                        {candidate.candidatename}
                                    </th>
                                    <th>
                                        {candidate.place}
                                    </th>
                                    <th>
                                        {candidate.position}
                                    </th>
                                    <th>
                                        <Link to={{
                                            pathname: "/voter/vote",
                                            state: { "candidate": candidate }
                                        }} >VOTE</Link>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (
                <div className="candidatesDiv">
                    <button onClick={() => this.getCandidatesList()} >GET CANDIDATES LIST</button>
                    <p>No Candidates found...!</p>
                </div>
            );
        }


    }
}


const mapStateToProps = (state) => ({
    candidates: state.voter.candidates,
    voteFor: state.voter.voteFor,
})

export default connect(mapStateToProps, { getCandidates })(Candidates);