import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import './UserManage.scss';
import { getAllUsersAPI, createNewUserAPI } from '../../services/userService';
import ModalUser from './ModalUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
        };
    }

    async componentDidMount() {
        await this.getAllUsers();
    }

    getAllUsers = async () => {
        let response = await getAllUsersAPI('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserAPI(data)
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUsers()
                this.toggleUserModal()
            }
        } catch (e) {
            console.log(e)
        }
        console.log('check data from child: ', data)
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
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
        let arrUsers = this.state.arrUsers;
        return (
            <div>
                <div className="users-container">
                    <ModalUser
                        isOpen={this.state.isOpenModalUser}
                        toggleFromParent={this.toggleUserModal}
                        createNewUser={this.createNewUser}
                    />
                    <div className="title"><span className="title-manage-user">Manage users</span></div>
                    <div className="mx-3">
                        <button className="btn btn-primary px-3"
                            onClick={() => this.handleAddNewUser()}
                        ><i className="fa-solid fa-user-plus" /> Add new user</button>
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
