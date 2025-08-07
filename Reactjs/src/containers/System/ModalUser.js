import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { handleSigninAPI, createNewUserAPI } from '../../services/userService';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phonenumber: '',
            address: '',
            gender: true,
            roleId: false,
        }
        // this.listenToEmitter();
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        // bad code
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check bad code', this.state)
        // })

        // good code
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['firstName', 'lastName', 'email', 'password', 'address', 'phonenumber'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            // call API
            this.props.createNewUser(this.state);
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                className={'modal-user-container'}
                size='lg'
            // centered='true'
            >
                <ModalHeader toggle={() => this.toggle()}>Create a new User</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>First name</label>
                            <input
                                type='text'
                                onChange={(event) => this.handleOnChangeInput(event, 'firstName')}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input
                                type='text'
                                onChange={(event) => this.handleOnChangeInput(event, 'lastName')}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                onChange={(event) => this.handleOnChangeInput(event, 'email')}
                                value={this.state.email}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                type='password'
                                onChange={(event) => this.handleOnChangeInput(event, 'password')}
                                value={this.state.password}
                            />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input
                                type='text'
                                onChange={(event) => this.handleOnChangeInput(event, 'address')}
                                value={this.state.address}
                            />
                        </div>
                        <div className='input-container on-row'>
                            <label>Phone Number</label>
                            <input
                                type='text'
                                onChange={(event) => this.handleOnChangeInput(event, 'phonenumber')}
                                value={this.state.phonenumber}
                            />
                        </div>
                        <div className='input-container on-row'>
                            <label htmlFor="inputGender">Gender</label>
                            <select name="gender" className="select-option"
                                onChange={(event) => this.handleOnChangeInput(event, 'gender')}
                                value={this.state.gender}
                            >
                                <option value='true'>Male</option>
                                <option value='false'>Female</option>
                            </select>
                        </div>
                        <div className='input-container on-row'>
                            <label htmlFor="inputRole">Role</label>
                            <select name="roleId" className="select-option"
                                onChange={(event) => this.handleOnChangeInput(event, 'roleId')}
                                value={this.state.roleId}
                            >
                                <option value='true'>Admin</option>
                                <option value='false'>Customer</option>
                            </select>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.handleAddNewUser() }}>Add new</Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>Close</Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
