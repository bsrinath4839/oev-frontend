import config from "../config";
import {
    LOAD_CANDIDATES_LIST_FAILED,
    LOAD_CANDIDATES_LIST_SUCCESS,
    VOTER_REGISTER_FAILED,
    VOTER_REGISTER_SUCCESS,
    VOTER_LOGIN_FAILED,
    VOTER_LOGIN_SUCCESS,
    VOTER_LOGOUT_FAILED,
    VOTER_LOGOUT_SUCCESS,
    VOTING_FAILED,
    VOTING_SUCCESS,
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
        console.log("cdc", data.candidates);

        dispatch({
            type: LOAD_CANDIDATES_LIST_SUCCESS,
            candidates: data.candidates
        })
        //window.location.reload(false);
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
                type: VOTER_LOGIN_FAILED,
                error: "LOGIN FAILED - CHECK YOUR CREDENTIALS"
            })
        }
    }).then((data) => {
        console.log(data);

        dispatch({
            type: VOTER_LOGIN_SUCCESS,
            payload: data.voter
        })
        window.location.reload(false);
    }).catch((err) => {
        console.log(err);
    })

}

export const register = (voterid, voteremail, votername, voterpassword) => async (dispatch) => {

    let url = config.apiurl + "/voter/register";

    let header = {
        "Content-Type": "application/json"
    }

    let body = {
        "voterid": voterid,
        "voteremail": voteremail,
        "votername": votername,
        "voterpassword": voterpassword,
    }

    await fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    }).then((response) => {
        console.log(response);

        if (response.ok) {
            dispatch({
                type: VOTER_REGISTER_SUCCESS,
            })
            return response.json();
        } else {
            dispatch({
                type: VOTER_REGISTER_FAILED,
                error: "REGISTRATION FAILED - CHECK YOUR CREADENTIALS"
            })
        }
    }).catch((err) => {
        console.log(err);
    })

}

export const logout = () => async (dispatch, getState) => {

    let state = getState().voter;
    // console.log(state);

    let url = config.apiurl + "/voter/logout";
    let header = {
        "Content-Type": "application/json"
    }

    let body = {
        "voteremail": state.voteremail,
        "votername": state.votername,
    }

    await fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    }).then((response) => {
        // console.log(response);

        if (response.ok) {
            dispatch({
                type: VOTER_LOGOUT_SUCCESS,
            })
            //return response.json();
            window.location.reload(false);
        } else {
            dispatch({
                type: VOTER_LOGOUT_FAILED,
                error: "LOGOUT FAILED - CHECK YOUR CREDENTIALS",
            })
        }
    }).catch((err) => {
        console.log(err);
    })


}

export const vote = (candidateid, candidatename, place, position) => async (dispatch, getState) => {
    //console.log("cdcd", { candidateid, candidatename, place, position });

   // console.log(getState().voter)

    const state = getState().voter;

    let body = {
        voteremail: state.voteremail,
        voterid: state.voterid,
        votername: state.votername,
        candidateid: candidateid,
        candidatename: candidatename,
        place: place,
        position: position,
    }

    let url = config.apiurl + "/vote/candidate";
    let header = {
        "Content-Type": "application/json"
    }
    await fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    }).then((response) => {
        // console.log(response);

        if (response.ok) {
            return response.json();
            //window.location.reload(false);
        } else {
            dispatch({
                type: VOTING_FAILED,
                error: "VOTING FAILED - CHECK DETAILS",
            })
        }
    }).then((data) => {
       // console.log("data", data.user);

        dispatch({
            type: VOTING_SUCCESS,
            payload: data.user
        })
    }).catch((err) => {
        console.log(err);
    })

}