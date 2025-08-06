import userService from '../services/userService';

let handleSignin = async (req, res) => {
    let userPhonenumber = req.body.phonenumber;
    let userPassword = req.body.password;

    if (!userPhonenumber || !userPassword) {
        return res.status(500).json({
            errCode: 1,
            errMessage: "Missing input parameter!!!!!"
        })
    }

    let userData = await userService.handleUserSignin(userPhonenumber, userPassword);

    return res.status(200).json({
        errCode: userData.errCode,
        errMessage: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id; // ALL, id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            users: []
        })
    }

    let users = await userService.getAllUsers(id);
    console.log(users)

    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users
    })
}

let handleCreateNewUser = async (req, res) => {
    let message = await userService.creatNewUser(req.body);
    console.log(message);
    return res.status(200).json(message)
}

module.exports = {
    handleSignin: handleSignin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
}