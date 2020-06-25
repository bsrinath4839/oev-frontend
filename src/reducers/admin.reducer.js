const initialState = {
    _id: "",
    adminemail: "",
    adminname: "",
    loggedin: Boolean(localStorage.getItem('adminloggedin')),
    isInitiated: false,
    error : ""
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADMIN_LOGIN_SUCCESS": {
            localStorage.setItem('adminemail', action.payload.email);
            localStorage.setItem('adminname', action.payload.name);
            localStorage.setItem('adminloggedin', action.payload.loggedin);
            return Object.assign({}, state, action.payload)
        }
        case "ADMIN_LOGIN_FAILED": {
            state = {
                initialState,
                error : action.error,
                loggedin: false,
                isInitiated: false,
            }
            return state;
        }
        case "ADMIN_LOGIN_INITIATED": {
            state = { 
                initialState,
                loggedin: false,
                isInitiated: true
            }
            return state;
        }
        case "ADMIN_LOGOUT_SUCCESS": {
            state = {
                initialState,
                loggedin : false,
                isInitiated : false
            }
            return state;
        }
        case "ADMIN_LOGOUT_FAILED": {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default adminReducer;