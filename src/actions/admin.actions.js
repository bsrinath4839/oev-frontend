//import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILED, ADMIN_LOGIN_INITIATED }

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
        console.log(response);
        
        if (response.ok) {           
            return response.json();
        } else {
            dispatch({
                type: "ADMIN_LOGIN_FAILED",
                error : "LOGIN FAILED",
            })
        }
    }).then((data) => {
        dispatch({
            type: "ADMIN_LOGIN_SUCCESS",
            payload: data.admin
        })
    }).catch((err) => {
        console.log(err);
    })

}
