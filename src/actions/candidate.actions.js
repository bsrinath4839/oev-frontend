import { CANDIDATE_LOGIN_FAILED, CANDIDATE_LOGIN_SUCCESS } from "./types";
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
        dispatch({
            type: CANDIDATE_LOGIN_SUCCESS,
            payload: data.candidate
        })
    }).catch((err) => {
        console.log(err);
    })

}