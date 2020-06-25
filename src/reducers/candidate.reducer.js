import {
    CANDIDATE_LOGIN_FAILED,
    CANDIDATE_LOGIN_SUCCESS
} from "../actions/types";

const initialState = {
    _id: "",
    candidateemail: "",
    candidatename: "",
    loggedin: Boolean(localStorage.getItem('candidateloggedin')),
    isInitiated: false,
    error: ""
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
            localStorage.setItem('candidateemail', action.payload.email);
            localStorage.setItem('candidatename', action.payload.name);
            localStorage.setItem('candidateloggedin', action.payload.loggedin);
            return Object.assign({}, state, action.payload)
        }
        default: {
            return state;
        }
    }
}

export default candidateReducer;