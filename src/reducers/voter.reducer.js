const initialState = {
    voteremail: "",
    voterpassword: "",
    votername: "",
    isLoggedin: Boolean(localStorage.getItem('loggedin')),
    isInitiated: false,
    candidates : [],
}

const voterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "VOTER_LOGIN_SUCCESS": {
            state = {
                ...state,
                voter: action.payload,
                isInitiated: false,
            }
            return state;
        }
        case "VOTER_LOGIN_FAILED": {
            state = {
                state,
                initialState,
                isLoggedin: false,
                isInitiated: false,
            }
            return state;
        }
        case "VOTER_LOGIN_INITIATED": {
            state = {
                ...state,
                isInitiated: true
            }
            break;
        }
        case "LOAD_CANDIDATES_LIST_SUCCESS": {
            state = { 
                ...state,
                candidates : action.candidates,
             }
            return state;
        }

        default: {
            return state;
        }
    }

}

export default voterReducer;