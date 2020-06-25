import React from 'react';
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
        if (this.props.candidates.length > 0) {
            return (
                <div>
                    <button onClick={() => this.getCandidatesList()} >GET CANDIDATES LIST</button>
                    <p>{this.props.candidates}</p>
                    <p>hiii</p>
                </div>
            );
        }
        return (
            <div>
                <button onClick={() => this.getCandidatesList()} >GET CANDIDATES LIST</button>
                <p>No Candidates found...!</p>
            </div>
        );

    }
}


const mapStateToProps = (state) => ({
    candidates: state.voter.candidates,
})

export default connect(mapStateToProps, { getCandidates })(Candidates);