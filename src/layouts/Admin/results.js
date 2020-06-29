import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { results } from "../../actions/admin.actions"

class Results extends React.Component {

    state = {
        resultsLoded: false,
        votingResults: [],
    }

    static propTypes = {
        votingResults: PropTypes.array.isRequired,
        resultsLoded: PropTypes.bool.isRequired,
        results: PropTypes.func.isRequired,
    }

    getResults() {
        this.props.results();
    }

    render() {
        if (this.props.resultsLoded) {
            return (
                this.props.votingResults.map((result) => (
                    <div>
                        <p>{result.candidateid}</p>
                        <p>{result.count}</p>
                    </div>
                ))
            )
        }
        return (
            <div>
                <p> Results are not published</p>
                <input className="loadResultsBtn" type="button" value="REFRESH RESULTS" onClick={() => this.getResults()} />
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    resultsLoded: state.admin.resultsLoded,
    votingResults: state.admin.votingResults
})

export default connect(mapStateToProps, { results })(Results);