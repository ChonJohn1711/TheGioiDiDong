import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { LANGUAGES } from '../../utils'

import { changeLanguageApp } from '../../store/actions'

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

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        // fire redux event : actions
    }

    render() {
        const { intl } = this.props;
        const placeholderSearch = intl.formatMessage({ id: 'home-header.search' });
        let language = this.props.language;
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
                                        placeholder={placeholderSearch}
                                        onKeyPress={e => e.key === 'Enter' && this.handleSearch()}
                                    />
                                </div>
                                <div className="optionBar">
                                    <Link className="signIn" to="/signin">
                                        <i className="fas fa-user px-2" />
                                        <FormattedMessage id="home-header.signin" />
                                    </Link>
                                    <Link className="cart" to="/cart">
                                        <i className="fas fa-cart-shopping px-2" />
                                        <FormattedMessage id="home-header.cart" />
                                    </Link>
                                    <div className="map" onClick={() => this.handleMap()}><i className="fas fa-map-marker-alt px-2" /><FormattedMessage id="home-header.HCM" /></div>

                                    <div className='language'>
                                        <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'} onClick={() => this.changeLanguage(LANGUAGES.VI)}>VI</div>
                                        <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'} onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* === MAIN NAV === */}
                    <div className="main-nav">
                        <div className="nav-list">
                            <a href="#" className="deviceList">
                                <i className="fa-solid fa-mobile-screen"></i><FormattedMessage id="home-header.phone" />
                            </a>
                            <a href="#" className="deviceList">
                                <i className="fa-solid fa-laptop"></i>Laptop
                            </a>
                            <a href="#" className="deviceListDown">
                                <i className="fa-solid fa-headphones-simple"></i><FormattedMessage id="home-header.accessory" />
                                <i className="fa-solid fa-caret-down caret-icon-down"></i>
                                <i className="fa-solid fa-caret-up caret-icon-up"></i>
                                <ul className="phukienList">
                                    <li><FormattedMessage id="home-header.case" /></li>
                                    <li><FormattedMessage id="home-header.backup_charger" /></li>
                                    <li><FormattedMessage id="home-header.earphone" /></li>
                                    <li><FormattedMessage id="home-header.mouse" /></li>
                                    <li><FormattedMessage id="home-header.keyboard" /></li>
                                    <li><FormattedMessage id="home-header.memory_card" /></li>
                                    <li><FormattedMessage id="home-header.charging_cable" /></li>
                                    <li><FormattedMessage id="home-header.bluetooth_speaker" /></li>
                                </ul>
                            </a>

                            <a href="#" className="deviceList">
                                <i className='smartwatch'><img src={smartwatch} /></i>Smartwatch
                            </a>
                            <a href="#" className="deviceList">
                                <i className='smartwatch'><img src={watch} /></i><FormattedMessage id="home-header.watch" />
                            </a>
                            <a href="#" className="deviceList">
                                <i className="fa-solid fa-tablet-screen-button"></i>Tablet
                            </a>
                            <a href="#" className="deviceListDown">
                                <i className='smartwatch'><img src={may_cu} /></i><FormattedMessage id="home-header.old_trade-in" />
                                <i className="fa-solid fa-caret-down caret-icon-down"></i>
                                <i className="fa-solid fa-caret-up caret-icon-up"></i>
                                <ul className="phukienList">
                                    <li><FormattedMessage id="home-header.old_good" /></li>
                                    <li><FormattedMessage id="home-header.trade-in_for_new" /></li>
                                    <li><FormattedMessage id="home-header.trade-in" /></li>
                                </ul>
                            </a>
                            <a href="#" className="deviceListDown">
                                <i className="fa-solid fa-computer"></i><FormattedMessage id="home-header.monitor_printer" />
                                <i className="fa-solid fa-caret-down caret-icon-down"></i>
                                <i className="fa-solid fa-caret-up caret-icon-up"></i>
                                <ul className="phukienList">
                                    <li><FormattedMessage id="home-header.desktop" /></li>
                                    <li><FormattedMessage id="home-header.computer_screen" /></li>
                                    <li><FormattedMessage id="home-header.monitor_mount" /></li>
                                    <li><FormattedMessage id="home-header.game_console" /></li>
                                    <li><FormattedMessage id="home-header.software" /></li>
                                    <li><FormattedMessage id="home-header.printer_ink" /></li>
                                    <li><FormattedMessage id="home-header.printer" /></li>
                                </ul>
                            </a>
                            <a href="#" className="deviceListDown">
                                <i className="fa-solid fa-sim-card"></i><FormattedMessage id="home-header.sim_scratch-card" />
                                <i className="fa-solid fa-caret-down caret-icon-down"></i>
                                <i className="fa-solid fa-caret-up caret-icon-up"></i>
                                <ul className="phukienList">
                                    <li><FormattedMessage id="home-header.sim_scratch-card" /></li>
                                    <li><FormattedMessage id="home-header.travel-eSIM" /></li>
                                </ul>
                            </a>
                            <a href="#" className="deviceListDown">
                                <i className="fa-solid fa-bell-concierge"></i><FormattedMessage id="home-header.services" />
                                <i className="fa-solid fa-caret-down caret-icon-down"></i>
                                <i className="fa-solid fa-caret-up caret-icon-up"></i>
                                <ul className="phukienList">
                                    <li><FormattedMessage id="home-header.bill" /></li>
                                    <li><FormattedMessage id="home-header.warranty" /></li>
                                    <li><FormattedMessage id="home-header.facility" /></li>
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
        isSignedIn: state.admin.isSignedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // processSignout: () => dispatch(actions.processSignout()),
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomeHeader));
