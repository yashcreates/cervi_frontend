import { getPatientFromPhoneURL, uploadForPredictionURL, getReportMessagesURL, addChatMessageURL, getDoctorsURL, requestDoctorURL, getRequestsURL, respondToRequestURL } from "../constants";

export const getPatientFromPhone = (token, phone) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "phoneNumber": phone
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
        body: raw,
    };

    return fetch(getPatientFromPhoneURL, requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => console.log('error', error));
}

export const uploadForPrediction = (image, userType, patientID, token, testType) => {
    console.log(testType)
    let testCode
    if(testType==="Pap Smear"){
        testCode="0"
    }
    if(testType==="Colposcopy")
        testCode="1"
    console.log("UPLOADING!!!")
    var uri = image.split(',')[1];
    console.log(uri)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ token);
    myHeaders.append("Content-Type", "application/json");

    let raw;
    if(userType==="doctor"){
        raw = JSON.stringify({
            "patient_id": patientID,
            "test_type": testCode,
            "file": uri
        })
    }

    if(userType==="patient"){
        raw = JSON.stringify({
            "test_type": testCode,
            "file": uri
        })
    }

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    };
    

    fetch(uploadForPredictionURL, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log('error', error));
}

export const getReportChat = (token, reportID) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "id": reportID
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    };

    return fetch(getReportMessagesURL, requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => console.log('error', error));
}

export const addChatMessage = (token, reportID, message) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "id": reportID,
        "message": message
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    };

    return fetch(addChatMessageURL, requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => console.log('error', error));
}

export const getDoctors = (token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    return fetch(getDoctorsURL, requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => console.log('error', error));
}

export const requestDoctor = (patientID, doctorId, recordID, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " +token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "patient": patientID,
        "doctor": doctorId,
        "record": recordID,
        "note": "Please help with consultation"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    return fetch(requestDoctorURL, requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => console.log('error', error));
}

export const getRequests = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer ");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    };

    return fetch(getRequestsURL, requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => console.log('error', error));
}

export const requestRespond = (token, record_id, response) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": record_id,
        "response": response
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    return fetch(respondToRequestURL, requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => console.log('error', error));
}