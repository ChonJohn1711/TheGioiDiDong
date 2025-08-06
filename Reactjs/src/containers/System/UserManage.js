import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import './UserManage.scss';
import { getAllUsersAPI } from '../../services/userService';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
        };
    }

    async componentDidMount() {
        let response = await getAllUsersAPI('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        alert('OK!!!!!')
    }

    handleDeleteUser = () => {
        alert('OK!!!!!')
    }

    handleEditUser = () => {
        alert('OK!!!!!')
    }

    /** Life Cycle
     * Run component:
     * 1. Run constructor
     * 2. Did mount (born): gán state, call API, set up event listeners || unmount: die
     * 3. Render
     */
    render() {
        console.log('check render: ', this.state);
        let arrUsers = this.state.arrUsers;
        return (
            <div>
                <div className="users-container">
                    {this.state.isOpenModalEditUser}

                    <div className="title"><span className="title-manage-user">Manage users</span></div>
                    <div className="mx-3">
                        <button className="btn btn-primary px-3"
                            onClick={() => this.handleAddNewUser()}
                        ><i class="fa-solid fa-user-plus" /> Add new user</button>
                    </div>
                    <div className="users-table mt-3 mx-3">
                        <table>
                            <tbody>
                                <tr style={{ backgroundColor: '#28c772ff' }}>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                    <th>Gender</th>
                                    <th>RoleID</th>
                                    <th>Actions</th>
                                </tr>
                                {arrUsers && arrUsers.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phonenumber}</td>
                                            <td>{item.address}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.roleId}</td>
                                            <td>
                                                <button className="btn-edit" onClick={() => this.handleEditUser()}><i className="fas fa-pencil-alt"></i></button>
                                                <button className="btn-delete" onClick={() => this.handleDeleteUser()}><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
