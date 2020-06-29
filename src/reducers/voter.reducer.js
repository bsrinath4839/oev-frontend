import {
    LOAD_CANDIDATES_LIST_FAILED,
    LOAD_CANDIDATES_LIST_SUCCESS,
    VOTER_LOGIN_FAILED,
    VOTER_LOGIN_SUCCESS,
    VOTER_REGISTER_FAILED,
    VOTER_REGISTER_SUCCESS,
    VOTER_LOGOUT_FAILED,
    VOTER_LOGOUT_SUCCESS,
    VOTING_FAILED,
    VOTING_SUCCESS,
} from "../actions/types";

const initialState = {
    voteremail: localStorage.getItem('voteremail'),
    votername: localStorage.getItem('votername'),
    voterid: localStorage.getItem('voterid'),
    loggedin: localStorage.getItem('voterloggedin'),
    isInitiated: false,
    isregisterd: false,
    isnominated: localStorage.getItem('isnominated'),
    error: "",
    candidates : [],
    voteFor :  JSON.parse(localStorage.getItem('voteFor')),
    isvoted : localStorage.getItem('isvoted'),
}

const voterReducer = (state = initialState, action) => {

    switch (action.type) {
        case VOTER_LOGIN_FAILED: {
            state = {
                initialState,
                loggedin: false,
                isInitiated: false,
                error : action.error
            }
            return state;
        }
        case VOTER_LOGIN_SUCCESS: {
            console.log("payload", action.payload);

            localStorage.setItem('voteremail', action.payload.voteremail);
            localStorage.setItem('votername', action.payload.votername);
            localStorage.setItem('voterid', action.payload.voterid);
            localStorage.setItem('voterloggedin', true);
            localStorage.setItem('isnominated', action.payload.isnominated);
            localStorage.setItem('isvoted', action.payload.isvoted);
            localStorage.setItem('voteFor', JSON.stringify(action.payload.votedFor));

            state = {
                ...state,
                voteremail: localStorage.getItem('voteremail'),
                votername: localStorage.getItem('votername'),
                voterid: localStorage.getItem('voterid'),
                loggedin: true,
                isnominated: action.payload.isnominated,
                isvoted : action.payload.isvoted,
                voteFor : action.payload.votedFor,
                error: ""
            }

            console.log("state login: ", state);
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
        case LOAD_CANDIDATES_LIST_FAILED : {
            return state;
        }
        case LOAD_CANDIDATES_LIST_SUCCESS : {
            state = {
                ...state,
                candidates : action.candidates
            }
            return state;
        }
        case VOTING_FAILED : {
            state = {
                ...state,
                error : action.error,
            }
           // console.log("statevote",state.voteFor);
            return state;
        }
        case VOTING_SUCCESS : {
            localStorage.setItem('isvoted', true);
            localStorage.setItem('voteFor', JSON.stringify(action.payload.votedFor));
            state = {
                ...state,
                isvoted : true,
                voteFor : action.payload.votedFor,
            }
            console.log("state vote",state);
            
            return state;
        }
        default: {
            return state;
        }
    }
}

export default voterReducer;