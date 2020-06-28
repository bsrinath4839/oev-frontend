import {
    VOTER_LOGIN_FAILED,
    VOTER_LOGIN_SUCCESS,
    VOTER_REGISTER_SUCCESS,
    VOTER_LOGOUT_FAILED,
    VOTER_LOGOUT_SUCCESS,
    VOTER_REGISTER_FAILED
} from "../actions/types";

const initialState = {
    voteremail: localStorage.getItem('voteremail'),
    votername: localStorage.getItem('votername'),
    voterid: localStorage.getItem('voterid'),
    loggedin: localStorage.getItem('voterloggedin'),
    isInitiated: false,
    isregisterd: false,
    isvoted: localStorage.getItem('isvoted'),
    error: "",
}

const voterReducer = (state = initialState, action) => {

    switch (action.type) {
        case VOTER_LOGIN_FAILED: {
            state = {
                initialState,
                error: action.error,
                loggedin: false,
                isInitiated: false,
            }
            return state;
        }
        case VOTER_LOGIN_SUCCESS: {
            console.log("payload",action.payload);

            localStorage.setItem('voteremail', action.payload.voteremail);
            localStorage.setItem('votername', action.payload.votername);
            localStorage.setItem('voterid', action.payload.voterid);
            localStorage.setItem('voterloggedin', true);
            localStorage.setItem('isvoted', action.payload.isvoted);

            state = {
                voteremail: localStorage.getItem('voteremail'),
                votername: localStorage.getItem('votername'),
                voterid: localStorage.getItem('voterid'),
                loggedin: true,
                isvoted: action.payload.isvoted,
                error : ""
            }

            console.log("state : ", state);
            return state;
        }
        case VOTER_REGISTER_SUCCESS: {
            state = {
                ...state,
                isregisterd: true,
                error: ""
            }
            return state;
        }
        case VOTER_REGISTER_FAILED: {
            state = {
                ...state,
                isregisterd: false,
                error: action.error,
            }
            return state;
        }
        case VOTER_LOGOUT_FAILED: {
            return state;
        }
        case VOTER_LOGOUT_SUCCESS: {
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

export default voterReducer;