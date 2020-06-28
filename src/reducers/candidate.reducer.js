import {
    CANDIDATE_LOGIN_FAILED,
    CANDIDATE_LOGIN_SUCCESS,
    CANDIDATE_REGISTER_SUCCESS,
    CANDIDATE_LOGOUT_FAILED,
    NOMINATE_CANDIDATE_SUCCESS,
    NOMINATE_CANDIDATE_FAILED,
    CANDIDATE_LOGOUT_SUCCESS,
    CANDIDATE_REGISTER_FAILED
} from "../actions/types";

const initialState = {
    candidateemail: localStorage.getItem('candidateemail'),
    candidatename: localStorage.getItem('candidatename'),
    candidateid: localStorage.getItem('candidateid'),
    loggedin: localStorage.getItem('candidateloggedin'),
    isInitiated: false,
    isregisterd: false,
    isnominated: localStorage.getItem('isnominated'),
    error: "",
}

const candidateReducer = (state = initialState, action) => {

    switch (action.type) {
        case CANDIDATE_LOGIN_FAILED: {
            state = {
                initialState,
                error: action.error,
                loggedin: false,
                isInitiated: false,
            }
            return state;
        }
        case CANDIDATE_LOGIN_SUCCESS: {
            console.log("payload",action.payload);

            localStorage.setItem('candidateemail', action.payload.candidateemail);
            localStorage.setItem('candidatename', action.payload.candidatename);
            localStorage.setItem('candidateid', action.payload.candidateid);
            localStorage.setItem('candidateloggedin', true);
            localStorage.setItem('isnominated', action.payload.isnominated);

            state = {
                candidateemail: localStorage.getItem('candidateemail'),
                candidatename: localStorage.getItem('candidatename'),
                candidateid: localStorage.getItem('candidateid'),
                loggedin: true,
                isnominated: action.payload.isnominated,
                error : ""
            }

            console.log("state : ", state);
            return state;
        }
        case CANDIDATE_REGISTER_SUCCESS: {
            state = {
                ...state,
                isregisterd: true,
                error: ""
            }
            return state;
        }
        case CANDIDATE_REGISTER_FAILED: {
            state = {
                ...state,
                isregisterd: false,
                error: action.error,
            }
            return state;
        }
        case NOMINATE_CANDIDATE_SUCCESS: {
            state = {
                ...state,
                isnominated: true,
                error: ""
            }
            return state;
        }
        case NOMINATE_CANDIDATE_FAILED: {
            state = {
                ...state,
                isnominated: false,
                error: action.error,
            }
            return state;
        }
        case CANDIDATE_LOGOUT_FAILED: {
            return state;
        }
        case CANDIDATE_LOGOUT_SUCCESS: {
            localStorage.clear();
            state = {
                ...state,
                loggedin: false,
                error: action.error,
            }
            return state;
        }
        default: {
            return state;
        }
    }
}

export default candidateReducer;