import bcrypt from "bcryptjs";
import db from "../models/index";
import { where } from "sequelize";
import { raw } from "body-parser";

const salt = bcrypt.genSaltSync(10);

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

let creatNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkUserPhone(data.phonenumber);
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Your phone number is already in used. Plz try another phone number!!!!!'
                })
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.Users.create({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    phonenumber: data.phonenumber,
                    password: hashPasswordFromBcrypt,
                    address: data.address,
                    gender: data.gender === 1 ? true : false,
                    roleId: data.roleId,
                })
            }

            resolve({
                errCode: 0,
                errMessage: 'OK!!!!!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = bcrypt.hashSync(password, salt)
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserSignin: handleUserSignin,
    getAllUsers: getAllUsers,
    creatNewUser: creatNewUser,
}