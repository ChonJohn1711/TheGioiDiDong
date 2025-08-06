import axios from "../axios";

const handleSigninAPI = async (userPhonenumber, userPassword) => {
    return axios.post('/api/signin', { phonenumber: userPhonenumber, password: userPassword });
}

export { handleSigninAPI }