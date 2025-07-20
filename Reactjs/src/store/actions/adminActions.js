import actionTypes from './actionTypes';

export const adminSigninSuccess = (adminInfo) => ({
    type: actionTypes.ADMIN_SIGNIN_SUCCESS,
    adminInfo: adminInfo
})

export const adminSigninFail = () => ({
    type: actionTypes.ADMIN_SIGNIN_FAIL
})

export const processSignout = () => ({
    type: actionTypes.PROCESS_SIGNOUT
})