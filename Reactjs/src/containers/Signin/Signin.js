import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Link } from 'react-router-dom';

import './Signin.scss';

import HomeHeader from '../Home/HomeHeader';

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
                    <div className="tgdd-footer">
                        <div className="footer-columns">
                            <div className="column">
                                <h4>Tổng đài hỗ trợ</h4>
                                <p>Gọi mua: <a href="tel:1900232460">1900 232 460</a> (8:00 - 21:30)</p>
                                <p>Kiếu nại: <a href="tel:18001062">1800.1062</a> (8:00 - 21:30)</p>
                                <p>Bảo hành: <a href="tel:1900232464">1900 232 464</a> (8:00 - 21:00)</p>
                            </div>
                            <div className="column">
                                <h4>Về công ty</h4>
                                <p><a href="#">Giới thiệu công ty (MWG.vn)</a></p>
                                <p><a href="#">Tuyển dụng</a></p>
                                <p><a href="#">Gửi góp ý, khiếu nại</a></p>
                                <p><a href="#">Tìm siêu thị (2.965 shop)</a></p>
                            </div>
                            <div className="column">
                                <h4>Thông tin khác</h4>
                                <p><a href="#">Tích điểm Quà tặng VIP</a></p>
                                <p><a href="#">Lịch sử mua hàng</a></p>
                                <p><a href="#">Đăng ký bán hàng CTV chiết khấu cao</a></p>
                                <p><a href="#">Tìm hiểu về mua trả chậm</a></p>
                                <p><a href="#">Chính sách bảo hành</a></p>
                            </div>
                            <div className="column">
                                <h4>Website cùng tập đoàn</h4>
                                <div className="site-links">
                                    <span>TopZone</span>
                                    <span>Điện máy XANH</span>
                                    <span>Bách hóa XANH</span>
                                    <span>Nhà thuốc An Khang</span>
                                    <span>Vieclam</span>
                                    <span>Erablue</span>
                                    <span>Thế Giới Thợ</span>
                                </div>
                                <div className="social">
                                    <span>🔵 3886.8k Fan</span>
                                    <span>🔴 874k Đăng ký</span>
                                    <span>Zalo TGDD</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div>© 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp
                                ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.</div>
                            <div>Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi
                                chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại:
                                028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email:
                                hotrotmdt@thegioididong.com. <a href="#">Xem chính sách sử dụng</a></div>
                        </div>
                    </div>
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
