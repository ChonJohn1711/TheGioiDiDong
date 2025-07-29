import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import './HomePage.scss';
import HomeHeader from './HomeHeader.js'

import DealAd from '../../assets/Home/DealAd.png'
import Facebook from '../../assets/Home/Facebook.png'
import Instagram from '../../assets/Home/Instagram.png'
import Gmail from '../../assets/Home/Gmail.png'
import Flash_Sale from '../../assets/Home/Flash_Sale.png'
import Online_Only from '../../assets/Home/Online_Only.png'

class HomePage extends Component {

    componentDidMount() {
        // nếu cần khởi tạo gì thì làm ở đây
    }

    render() {
        console.log('check props: ', this.props)
        return (
            <div className='HomePage-container'>
                <div className="site-header">
                    {/* === TOP BANNER === */}
                    <div className="top-banner"> <img src={DealAd} /></div>
                    <HomeHeader />
                </div>
                <div className="promo-online">

                    <div className='onlineSale'><FormattedMessage id="home-page.promotion" /></div>
                    <div className="promo-wrapper">
                        <ul className="promo-tabs">
                            <button className="deviceBar image-btn"><img src={Flash_Sale} /></button>
                            <button className="deviceBar image-btn"><img src={Online_Only} /></button>
                            <li className="deviceBar text-btn"><FormattedMessage id="home-header.phone" /></li>
                            <li className="deviceBar text-btn">Apple</li>
                            <li className="deviceBar text-btn">Laptop</li>
                            <li className="deviceBar text-btn"><FormattedMessage id="home-header.accessory" /></li>
                            <li className="deviceBar text-btn"><FormattedMessage id="home-header.watch" /></li>
                            <li className="deviceBar text-btn"><FormattedMessage id="home-page.pc_printer" /></li>
                        </ul>

                        <div className="time-header">
                            <div className="countdown-box">
                                <span>Chỉ còn:</span>
                                <div className="countdown">00 : 00 : 00</div>
                            </div>
                            <ul className="time-slots">
                                {['15:00', '18:00'].map((t, i) => (
                                    <li key={i}>
                                        <span className="label">Sắp diễn ra</span>
                                        <span className="time">{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* === SOCIAL LINKS === */}
                        <div className="content-center">
                            <div className="top">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100025931371462&locale=vi_VN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={Facebook} alt="Facebook" />
                                </a>
                            </div>
                            <div className="mid">
                                <a
                                    href="https://www.instagram.com/_chonjohn_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={Instagram} alt="Instagram" />
                                </a>
                            </div>
                            <div className="under">
                                <a
                                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={Gmail} alt="Gmail" />
                                </a>
                            </div>
                        </div>

                        <div className="promo-items">
                            {/* Giả lập sản phẩm mẫu */}
                            {[...Array(12)].map((_, i) => (
                                <div className="item" key={i}>
                                    <p className="title">Tên sản phẩm {i + 1}</p>
                                    <p className="price">5.990.000₫</p>
                                    <p className="stock"><span role="img" aria-label="fire">🔥</span> Còn {Math.ceil(Math.random() * 10)}/10 suất</p>
                                </div>
                            ))}
                        </div>
                        <h1>sản phẩm siêu sale:</h1>
                        <div className="promo-items">
                            {[...Array(12)].map((_, i) => (
                                <div className="item" key={i}>
                                    <p className="title">Tên sản phẩm {i + 1}</p>
                                    <p className="price">5.990.000₫</p>
                                    <p className="stock"><span role="img" aria-label="fire">🔥</span> Còn {Math.ceil(Math.random() * 10)}/10 suất</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.admin.isSignedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // processSignout: () => dispatch(actions.processSignout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
