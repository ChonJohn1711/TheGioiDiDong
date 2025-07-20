import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../utils";

import userIcon from '../../src/assets/images/user.svg';
import passIcon from '../../src/assets/images/pass.svg';
import './Signin.scss';
import { FormattedMessage } from 'react-intl';

import adminService from '../services/adminService';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.btnSignin = React.createRef();
    }

    initialState = {
        username: '',
        password: '',
        signinError: ''
    }

    state = {
        ...this.initialState
    };

    refresh = () => {
        this.setState({
            ...this.initialState
        })
    }

    onUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    redirectToSystemPage = () => {
        const { navigate } = this.props;
        const redirectPath = '/system/user-manage';
        navigate(`${redirectPath}`);
    }

    processSignin = () => {
        const { username, password } = this.state;

        const { adminSigninSuccess, adminSigninFail } = this.props;
        let signinBody = {
            username: 'admin',
            password: '123456'
        }
        //sucess
        let adminInfo = {
            "tlid": "0",
            "tlfullname": "Administrator",
            "custype": "A",
            "accessToken": "eyJhbGciOiJIU"
        }

        adminSigninSuccess(adminInfo);
        this.refresh();
        this.redirectToSystemPage();
        try {
            adminService.signin(signinBody)
        } catch (e) {
            console.log('error sign in : ', e)
        }

    }

    handlerKeyDown = (event) => {
        const keyCode = event.which || event.keyCode;
        if (keyCode === KeyCodeUtils.ENTER) {
            event.preventDefault();
            if (!this.btnSignin.current || this.btnSignin.current.disabled) return;
            this.btnSignin.current.click();
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handlerKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlerKeyDown);
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        const { username, password, signinError } = this.state;
        const { lang } = this.props;

        return (
            <div className="signin-wrapper">
                <div className="signin-container">
                    <div className="form_signin">
                        <h2 className="title">
                            <FormattedMessage id="signin.signin" />
                        </h2>
                        <div className="form-group icon-true">
                            <img className="icon" src={userIcon} alt="this" />
                            <input
                                placeholder={LanguageUtils.getMessageByKey("signin.username", lang)}
                                id="username"
                                name="username"
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={this.onUsernameChange}
                            />
                        </div>

                        <div id="phone-input-container" className="form-group icon-true">
                            <img className="icon" src={passIcon} alt="this" />
                            <input
                                placeholder={LanguageUtils.getMessageByKey("signin.password", lang)}
                                id="password"
                                name="password"
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={this.onPasswordChange}
                            />
                        </div>

                        {signinError !== '' && (
                            <div className='signin-error'>
                                <span className='signin-error-message'>{signinError}</span>
                            </div>
                        )}

                        <div className="form-group signin">
                            <input
                                ref={this.btnSignin}
                                id="btnSignin"
                                type="submit"
                                className="btn"
                                value={LanguageUtils.getMessageByKey("signin.signin", lang)}
                                onClick={this.processSignin}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminSigninSuccess: (adminInfo) => dispatch(actions.adminSigninSuccess(adminInfo)),
        adminSigninFail: () => dispatch(actions.adminSigninFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
