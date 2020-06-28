import {
    ADMIN_LOGIN_FAILED,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGOUT_SUCCESS,
    ADMIN_LOGOUT_FAILED,
    LOAD_RESULTS_FAILED,
    LOAD_RESULTS_SUCCESS
} from "./types";
import config from "../config";

export const login = (adminemail, adminpassword) => async (dispatch) => {

    let url = config.apiurl + "/admin/login";
    let header = {
        "Content-Type": "application/json"
    }

    let body = {
        "adminemail": adminemail,
        "adminpassword": adminpassword
    }

    await fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    }).then((response) => {
        //console.log(response);

        if (response.ok) {
            return response.json();
        } else {
            dispatch({
                type: ADMIN_LOGIN_FAILED,
                error: "LOGIN FAILED - CHECK YOUR CREDENTIALS",
            })
        }
    }).then((data) => {
        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data.admin
        })
        //window.location.reload(false);
    }).catch((err) => {
        console.log(err);
    })

}

export const logout = () => async (dispatch, getState) => {
    const state = getState().admin;
   // console.log(getState());
    
    let url = config.apiurl + "/admin/logout";
    let header = {
        "Content-Type": "application/json"
    }

    let body = {
        "adminemail": state.adminemail,
    }
    //console.log(state);
    

    await fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    }).then((response) => {
        //console.log(response);

        if (response.ok) {
            dispatch({
                type: ADMIN_LOGOUT_SUCCESS,
            })
            //return response.json();
        } else {
            dispatch({
                type: ADMIN_LOGOUT_FAILED,
                error: "LOGOUT FAILED - CHECK YOUR CREDENTIALS",
            })
        }
    }).catch((err) => {
        console.log(err);
    })

    //window.location.reload = false;
}


export const results = () => async (dispatch, getState) => {
    const state = getState().admin;

    let url = config.apiurl + "/results";

    let header = {
        "Content-Type": "application/json"
    }

    let body = {
        "adminemail": state.adminemail,
    }
    await fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    }).then((response) => {
        console.log("res", response);
        if (response.ok) {
            return response.json()
        } else {
            dispatch({
                type: LOAD_RESULTS_FAILED
            })
        }

    }).then((data) => {
        console.log("data", data);
        dispatch({
            type: LOAD_RESULTS_SUCCESS,
            payload: data.results,
        })
    }).catch((err) => {
        console.log(err);
    })
}