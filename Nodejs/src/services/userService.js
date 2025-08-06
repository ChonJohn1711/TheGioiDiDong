import bcrypt from "bcryptjs";
import db from "../models/index";
import { where } from "sequelize";
import { raw } from "body-parser";

let handleUserSignin = (phonenumber, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserPhone(phonenumber);
            if (isExist) {
                let user = await db.Users.findOne({
                    where: { phonenumber: phonenumber },
                    raw: true
                })

                if (user) {
                    //compare password
                    let checkUserPassword = bcrypt.compareSync(password, user.password);
                    if (checkUserPassword) {
                        userData.errCode = 0;
                        userData.errMessage = `OK!!!!!`;

                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = `Wrong password. Plz try again!!!!!`;
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User not found!!!!!`;
                }
            } else {
                userData.errCode = 1;
                userData.errMessage = `Your phone number isn't exist. Plz try another phone number!!!!!`;
            }
            resolve(userData);
        } catch (e) {
            reject(e)
        }
    })
}

let checkUserPhone = (userPhonenumber) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { phonenumber: userPhonenumber }
            })

            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = ''
            if (userId === 'ALL') {
                users = await db.Users.findAll({
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            if (userId && userId !== 'ALL') {
                users = await db.Users.findOne({
                    where: { id: userId },
                    raw: true,
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserSignin: handleUserSignin,
    getAllUsers: getAllUsers,
}