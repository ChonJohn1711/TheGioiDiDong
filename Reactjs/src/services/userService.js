import axios from "../axios";

const handleSigninAPI = async (userPhonenumber, userPassword) => {
    return axios.post('/api/signin', { phonenumber: userPhonenumber, password: userPassword });
}

const getAllUsersAPI = async (inputId) => {
    return axios.get(`api/get-all-users?id=${inputId}`)
}

export { handleSigninAPI, getAllUsersAPI }