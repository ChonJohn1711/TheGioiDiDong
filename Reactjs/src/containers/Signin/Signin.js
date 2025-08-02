import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Link } from 'react-router-dom';

import './Signin.scss';

import HomeHeader from '../Home/HomeHeader';
import Support from '../Support/Support';

import Signin_img from '../../assets/Signin/Signin_img.png'

import { FormattedMessage } from 'react-intl';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorSignin: '',
            errorMessage: '',
            showPassword: false
        };
    }

    render() {
        return (
            <>
                <div className="Signin-container">
                    <HomeHeader />
                    <div className="order-lookup-wrapper">
                        <div className="order-banner">
                            <img src={Signin_img} alt="banner" />
                        </div>
                        <div className="order-lookup-box">
                            <h2>Tra cứu thông tin đơn hàng</h2>
                            <div className="userInput">
                                <div className="inputGroup">
                                    <i className="fas fa-mobile-alt icon" />
                                    <input type="text" placeholder="Nhập số điện thoại mua hàng" />
                                </div>

                                <div className="inputGroup passwordGroup">
                                    <input
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        placeholder="Nhập mật khẩu"
                                    />
                                    <i
                                        className={`fa-regular ${this.state.showPassword ? 'fa-eye' : 'fa-eye-slash'} icon toggle-password`}
                                        onClick={() => this.setState({ showPassword: !this.state.showPassword })}
                                        style={{ cursor: 'pointer' }}
                                    />

                                </div>

                            </div>
                            <button className="btn-continue">TIẾP TỤC</button>
                        </div>
                    </div>
                    <Support />
                </div>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userSigninFail: () => dispatch(actions.userSigninFail()),
        // userSigninSuccess: (userInfor) => dispatch(actions.userSigninSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
