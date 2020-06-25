import config from "../config";
import {
    LOAD_CANDIDATES_LIST_FAILED,
    LOAD_CANDIDATES_LIST_SUCCESS,
    VOTER_REGISTER_FAILED,
    VOTER_REGISTER_SUCCESS,
    VOTER_LOGIN_FAILED,
    VOTER_LOGIN_SUCCESS
} from "./types"


export const getCandidates = () => (dispatch) => {
    let header = {
        "Content-Type": "application/json",
    }

    let url = config.apiurl + "/candidate/candidates";

    fetch(url, {
        method: 'POST',
        headers: header,
        body: JSON.stringify({})
    }).then((response) => {
        if (response.ok) {
            return (response.json())
        } else {
            dispatch({
                type: LOAD_CANDIDATES_LIST_FAILED
            })
        }
    }).then((data) => {
        dispatch({
            type: LOAD_CANDIDATES_LIST_SUCCESS,
            candidates: data.candidates
        })
    }).catch((err) => {
        dispatch({
            type: LOAD_CANDIDATES_LIST_FAILED
        })
    })
}

export const login = (voterid, voteremail, voterpassword) => async (dispatch) => {

    let url = config.apiurl + "/voter/login";

    let header = {
        "Content-Type": "application/json"
    }

    let body = {
        "voterid": voterid,
        "voteremail": voteremail,
        "voterpassword": voterpassword,
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
                type: VOTER_LOGIN_FAILED
            })
        }
    }).then((data) => {
        dispatch({
            type: VOTER_LOGIN_SUCCESS,
            payload: data.voter
        })
    }).catch((err) => {
        console.log(err);
    })

}


export const register = (voterid, votername, voteremail, voterpassword) => async (dispatch) => {

    let url = config.apiurl + "/voter/register";

    let header = {
        "Content-Type": "application/json"
    }

    let body = {
        "voterid": voterid,
        "votername": votername,
        "voteremail": voteremail,
        "voterpassword": voterpassword,
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
                type: VOTER_REGISTER_FAILED
            })
        }
    }).then((data) => {
        dispatch({
            type: VOTER_REGISTER_SUCCESS,
            payload: data.voter
        })
    }).catch((err) => {
        console.log(err);
    })

}