import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Link } from 'react-router-dom';

import './Cart.scss';

import HomeHeader from '../Home/HomeHeader';
import Cart_empty from '../../assets/Cart/Cart_empty.png'

import { FormattedMessage } from 'react-intl';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorCart: '',
            errorMessage: '',
            showPassword: false
        };
    }

    render() {
        return (
            <div className="Cart-container">
                <HomeHeader />
                <div className="iconcart-empty">
                    <img src={Cart_empty} />
                    <h1>Giỏ hàng trống</h1>
                    <span className="dmx">Không có sản phẩm nào trong giỏ hàng</span>
                    <Link to="/homepage" className="btn-backhome">Về trang chủ</Link>
                    <div className='note-help'>Khi cần trợ giúp vui lòng gọi <a href="#">1900 232 460</a> hoặc <a href="#">028.3622.1060</a> (8h00 - 21h30)</div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
