import { createSlice } from "@reduxjs/toolkit";
import { getAllRecordsURL, getProfile, getRequestsURL } from "../../constants";
import { checkAuth } from "../helperFunctions";

const slice = createSlice({
    name: "userData",
    initialState: {
        reports: [],
        profile: {
            name: null,
            dob: null,
            email: null,
            phone: null
        },
        requests: []
    },
    reducers: {
        setReports: (state,action) => {
            state.reports = action.payload
            state.loaded = true
        },
        setProfile: (state,action) => {
            state.profile.name = action.payload.name
            state.profile.dob = action.payload.dob
            state.profile.email = action.payload.email
            state.profile.phone = action.payload.phoneNumber
        },
        setRequests: (state, action) => {
            state.requests = action.payload
        }
    }
})

export const {setReports, setProfile, setRequests} = slice.actions
export default slice.reducer

export const fetchReports = (token) => (dispatch, getState) => {
    const url = getAllRecordsURL
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch(url, requestOptions)
    .then(response => {
        checkAuth(response)
        return response.json()
    })
    .then(result => {
        dispatch(setReports(result.records))
        console.log(result)
    })
    .catch(error => console.log('error', error));
}

export const fetchProfile = (token) => (dispatch, getState) => {
    const url = getProfile
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch(url, requestOptions)
    .then(response => {
        checkAuth(response)
        return response.json()
    })
    .then(result => {
        dispatch(setProfile(result))
        console.log(result)
    })
    .catch(error => console.log('error', error));
}

export const fetchRequests = (token) => (dispatch, getState) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " +token);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    };

    fetch(getRequestsURL, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result.requests)
        dispatch(setRequests(result.requests))
    })
    .catch(error => console.log('error', error));
}
