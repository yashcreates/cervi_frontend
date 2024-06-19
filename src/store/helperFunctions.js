export const checkAuth = (response) => {
    if(response.status===401||response.status===403){
        localStorage.removeItem("accessToken")
        localStorage.removeItem("userType")
        window.location.reload()         
    }
}