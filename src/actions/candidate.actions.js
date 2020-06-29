import {
    CANDIDATE_LOGIN_FAILED,
    CANDIDATE_LOGIN_SUCCESS,
    CANDIDATE_REGISTER_SUCCESS,
    CANDIDATE_LOGOUT_FAILED,
    NOMINATE_CANDIDATE_SUCCESS,
    NOMINATE_CANDIDATE_FAILED,
    CANDIDATE_REGISTER_FAILED,
    CANDIDATE_LOGOUT_SUCCESS
} from "../actions/types";
import config from "../config"

export const login = (candidateid, candidateemail, candidatepassword) => async (dispatch) => {
    let url = config.apiurl + "/candidate/login";

    let header = {
        "Content-Type": "application/json"
    }

    let body = {
        "candidateid": candidateid,
        "candidateemail": candidateemail,
        "candidatepassword": candidatepassword,
    }

    await fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    }).then((response) => {
        console.log(response);

        if (response.ok) {
            return response.json();
        } else {
            dispatch({
                type: CANDIDATE_LOGIN_FAILED,
                error: "LOGIN FAILED - CHECK YOUR CREDENTIALS",
            })
        }
    }).then((data) => {
        console.log(data.candidate);

        dispatch({
            type: CANDIDATE_LOGIN_SUCCESS,
            payload: data.candidate
        })
        window.location.reload(false);
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: CANDIDATE_LOGIN_FAILED,
            error: "LOGIN FAILED - SOME ERROR OCCURED! TRY AFTER SOME TIME"
        })
    })

}

export const register = (candidateid, candidateemail, candidatename, candidatepassword) => (dispatch, getState) => {

    let url = config.apiurl + "/candidate/register";

    let header = {
        "Content-Type": "application/json"
    }

    let body = {
        "candidateid": candidateid,
        "candidateemail": candidateemail,
        "candidatename": candidatename,
        "candidatepassword": candidatepassword
    }

    fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    }).then((response) => {
        console.log(response);

        if (response.ok) {
            dispatch({
                type: CANDIDATE_REGISTER_SUCCESS
            })
            return response.json()
        } else {
            dispatch({
                type: CANDIDATE_REGISTER_FAILED,
                error: "REGISTER FAILED - YOU MIGHT BE ALREADY EXIST"
            })
        }
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: CANDIDATE_REGISTER_FAILED,
            error: "REGISTER FAILED - SOME ERROR OCCURED! TRY AFTER SOME TIME"
        })
    })
}

export const nominate = (place, position) => (dispatch, getState) => {
    let url = config.apiurl + "/candidate/nominate";

    let header = {
        "Content-Type": "application/json"
    }

    let state = getState().candidate;

    let body = {
        "candidateemail": state.candidateemail,
        "candidateid": state.candidateid,
        "candidatename": state.candidatename,
        "place": place,
        "position": position,
    }

    fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            dispatch({
                type: NOMINATE_CANDIDATE_FAILED,
                error: "NOMINATION FAILED - YOU MIGHT BE ALREADY NOMINATED!!!"
            })
        }
    }).then((data) => {
        dispatch({
            type: NOMINATE_CANDIDATE_SUCCESS,
            payload: data.nomination
        })
    }).catch((err) => {
        dispatch({
            type: NOMINATE_CANDIDATE_FAILED,
            error: "ERROR OCCURED - TRY AFTER SOME TIME!!!"
        })
    })

}

export const logout = () => async (dispatch, getState) => {

    let state = getState().candidate;
    // console.log(state);

    let url = config.apiurl + "/candidate/logout";
    let header = {
        "Content-Type": "application/json"
    }

    let body = {
        "candidateemail": state.candidateemail,
        "candidatename": state.candidatename,
    }

    await fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    }).then((response) => {
        // console.log(response);

        if (response.ok) {
            dispatch({
                type: CANDIDATE_LOGOUT_SUCCESS,
            })
            //return response.json();
            window.location.reload(false);
        } else {
            dispatch({
                type: CANDIDATE_LOGOUT_FAILED,
                error: "LOGOUT FAILED - CHECK YOUR CREDENTIALS",
            })
        }
    }).catch((err) => {
        console.log(err);
    })


}