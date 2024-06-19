export const apiURL = 'http://127.0.0.1:8000'
export const registerPatientURL =  apiURL+'/auth/register/patient'
export const registerDoctorURL = apiURL+'/auth/register/doctor'
export const getTokenURL = apiURL+'/auth/get-token'
export const uploadForPredictionURL = apiURL+'/detection/operate/'
export const getAllRecordsURL = apiURL+'/detection/records/'
export const getProfile = apiURL+'/auth/get-profile'
export const getPatientFromPhoneURL = apiURL+'/auth/get-patient'
export const getReportMessagesURL = apiURL+'/chats/get-messages/'
export const addChatMessageURL = apiURL+'/chats/add-message/'
export const getDoctorsURL = apiURL+'/auth/get-doctors'
export const requestDoctorURL = apiURL+'/requests/add-request/'
export const getRequestsURL = apiURL+'/requests/get-request/'
export const respondToRequestURL = apiURL+"/requests/respond-request/"