import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';

class Header extends Component {

    render() {
        const { processSignout } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* nút signout */}
                <div className="btn btn-signout" onClick={processSignout}>
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isSignedIn: state.user.isSignedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processSignout: () => dispatch(actions.processSignout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
