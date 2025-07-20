import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import './HomeHeader.scss';

import tgddImage from '../../assets/Header/TGDD.png'
import smartwatch from '../../assets/Header/smartwatch.png'
import watch from '../../assets/Header/watch.png'
import may_cu from '../../assets/Header/may_cu.png'

class HomeHeader extends Component {

    componentDidMount() {
        // nếu cần khởi tạo gì thì làm ở đây
    }

    handleSearch = () => {
        alert('ok');
    };

    handleMap = () => {
        alert('ok');
    }

    render() {
        return (
            <div className="HomeHeader-container">
                <div className="site-header">
                    {/* === HEADER MAIN === */}
                    <div className="header-main">
                        <div className="header-container">
                            <div className="logo">
                                <div>
                                    <Link to="/homepage">
                                        <img src={tgddImage} alt="thegioididong.com" />
                                    </Link>
                                </div>
                            </div>
                            <div className='search-actions'>
                                <div className="search">
                                    <button className="btn-search" onClick={() => this.handleSearch()}>
                                        <i className="fas fa-search"></i>
                                    </button>
                                    <input
                                        type="text"
                                        placeholder="Bạn tìm gì..."
                                        onKeyPress={e => e.key === 'Enter' && this.handleSearch()}
                                    />
                                </div>
                                <div className="optionBar">
                                    <Link className="signIn" to="/signin">
                                        <i className="fas fa-user px-2" />
                                        Đăng nhập
                                    </Link>
                                    <Link className="cart" to="/cart">
                                        <i className="fas fa-cart-shopping px-2" />
                                        Giỏ hàng
                                    </Link>
                                    <div className="map" onClick={() => this.handleMap()}><i className="fas fa-map-marker-alt px-2" />Hồ Chí Minh</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* === MAIN NAV === */}
                    <div className="main-nav">
                        <div className="nav-list">
                            <a href="#" className="deviceList">
                                <i className="fa-solid fa-mobile-screen"></i>Điện thoại
                            </a>
                            <a href="#" className="deviceList">
                                <i className="fa-solid fa-laptop"></i>Laptop
                            </a>
                            <a href="#" className="deviceListDown">
                                <i className="fa-solid fa-headphones-simple"></i>Phụ kiện
                                <i className="fa-solid fa-caret-down caret-icon-down"></i>
                                <i className="fa-solid fa-caret-up caret-icon-up"></i>
                                <ul className="phukienList">
                                    <li>Ốp lưng</li>
                                    <li>Sạc dự phòng</li>
                                    <li>Tai nghe</li>
                                    <li>Chuột</li>
                                    <li>Bàn phím</li>
                                    <li>Thẻ nhớ</li>
                                    <li>Cáp sạc</li>
                                    <li>Loa Bluetooth</li>
                                </ul>
                            </a>

                            <a href="#" className="deviceList">
                                <i className='smartwatch'><img src={smartwatch} /></i>Smartwatch
                            </a>
                            <a href="#" className="deviceList">
                                <i className='smartwatch'><img src={watch} /></i>Đồng hồ
                            </a>
                            <a href="#" className="deviceList">
                                <i className="fa-solid fa-tablet-screen-button"></i>Tablet
                            </a>
                            <a href="#" className="deviceListDown">
                                <i className='smartwatch'><img src={may_cu} /></i>Máy cũ, thu cũ
                                <i className="fa-solid fa-caret-down caret-icon-down"></i>
                                <i className="fa-solid fa-caret-up caret-icon-up"></i>
                                <ul className="phukienList">
                                    <li>Máy cũ giá tốt</li>
                                    <li>Thu cũ đổi mới</li>
                                    <li>Thu mua máy cũ</li>
                                </ul>
                            </a>
                            <a href="#" className="deviceListDown">
                                <i className="fa-solid fa-computer"></i>Màn hình, máy in
                                <i className="fa-solid fa-caret-down caret-icon-down"></i>
                                <i className="fa-solid fa-caret-up caret-icon-up"></i>
                                <ul className="phukienList">
                                    <li>Máy tính để bàn</li>
                                    <li>Màn hình máy tính</li>
                                    <li>Giá treo màn hình</li>
                                    <li>Myas chơi game</li>
                                    <li>Phần mềm</li>
                                    <li>Mực in</li>
                                    <li>Máy in</li>
                                </ul>
                            </a>
                            <a href="#" className="deviceListDown">
                                <i className="fa-solid fa-sim-card"></i>Sim, thẻ cào
                                <i className="fa-solid fa-caret-down caret-icon-down"></i>
                                <i className="fa-solid fa-caret-up caret-icon-up"></i>
                                <ul className="phukienList">
                                    <li>Sim, thẻ cào</li>
                                    <li>eSim du lịch</li>
                                </ul>
                            </a>
                            <a href="#" className="deviceListDown">
                                <i className="fa-solid fa-bell-concierge"></i>Dịch vụ tiện ích
                                <i className="fa-solid fa-caret-down caret-icon-down"></i>
                                <i className="fa-solid fa-caret-up caret-icon-up"></i>
                                <ul className="phukienList">
                                    <li>Thanh toán hóa đơn</li>
                                    <li>Bảo hành - bảo hiểm</li>
                                    <li>Tiện ích viễn thông</li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.admin.isSignedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processSignout: () => dispatch(actions.processSignout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
