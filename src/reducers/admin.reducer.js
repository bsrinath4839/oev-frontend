import {
    ADMIN_LOGIN_FAILED,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGOUT_SUCCESS,
    ADMIN_LOGOUT_FAILED,
    LOAD_RESULTS_SUCCESS,
    LOAD_RESULTS_FAILED
} from "../actions/types";

const initialState = {
    adminemail: localStorage.getItem('adminemail'),
    adminname: localStorage.getItem('adminname'),
    loggedin: Boolean(localStorage.getItem('adminloggedin')),
    isInitiated: false,
    error: "",
    votingResults: [],
    resultsLoded: false,
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_LOGIN_SUCCESS: {
            //console.log(action.payload);
            localStorage.setItem('adminemail', action.payload.adminemail);
            localStorage.setItem('adminname', action.payload.adminname);
            localStorage.setItem('adminloggedin', true);
            return Object.assign({}, state, action.payload)
        }
        case ADMIN_LOGIN_FAILED: {
            state = {
                initialState,
                error: action.error,
                loggedin: false,
                isInitiated: false,
            }
            return state;
        }
        case ADMIN_LOGOUT_SUCCESS: {
            localStorage.clear();
            state = {
                ...state,
                loggedin: false,
                isInitiated: false
            }
            return state;
        }
        case ADMIN_LOGOUT_FAILED: {
            return state;
        }
        case LOAD_RESULTS_SUCCESS: {
            state = {
                ...state,
                votingResults : action.payload,
                resultsLoded: true,
            }
            return state;
        }
        case LOAD_RESULTS_FAILED: {
            state = {
                ...state,
                resultsLoded: false,
            }
            return state;
        }
        default: {
            return state;
        }
    }
}

export default adminReducer;