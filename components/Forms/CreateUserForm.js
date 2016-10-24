import React, { PropTypes } from 'react';
import EmptyState from '../EmptyState/EmptyState';

class CreateUserForm extends React.Component {

  state = { newUser : {} };

  static propTypes = {
    handleSubmit: React.PropTypes.func,
    handleCancel: React.PropTypes.func,
    value: React.PropTypes.object
  };

  handleSubmit = (event) => {
    this.props.handleSubmit(event, this.state.newUser);
  };

  handleCancel = (event) => {
    this.props.handleCancel(event);
  };

  handleChange = (e, prop) => {
    let o = Object.assign({}, this.state.newUser);
    o[prop] = e.target.value;
    this.setState({newUser: o});
  };

  componentDidMount(){
    this.setState({newUser: this.props.value});
  }

  render() {
    return (
      <EmptyState title={ Object.keys(this.props.value).length === 0 ? 'Create User' : 'Edit User'}>
        <form className="form-horizontal" role="form">
          <p className="fields-status-pf">All fields are required.</p>
          <div className="form-group">
            <label htmlFor="firstname" className="col-sm-2 control-label required-pf">First Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="firstname" required=""
                     value={this.state.newUser.first_name}
                     onChange={(e) => { this.handleChange(e,'first_name')}}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastname" className="col-sm-2 control-label required-pf">Last Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="lastname" required=""
                     value={this.state.newUser.last_name}
                     onChange={(e) => { this.handleChange(e,'last_name')}}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username" className="col-sm-2 control-label required-pf">Username</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="username" required=""
                     value={this.state.newUser.user_name}
                     onChange={(e) => { this.handleChange(e,'user_name')}}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-sm-2 control-label required-pf">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="password" required=""
                     value={this.state.newUser.password}
                     onChange={(e) => { this.handleChange(e,'password')}}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="col-sm-2 control-label required-pf">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" required=""
                     value={this.state.newUser.email}
                     onChange={(e) => { this.handleChange(e,'email')}}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="sshkey" className="col-sm-2 control-label">SSH Public Key</label>
            <div className="col-sm-10">
              <textarea className="form-control" id="sshkey" placeholder="paste your ssh key here..." rows="2"
                        value={this.state.newUser.ssh_public_key}
                        onChange={(e) => { this.handleChange(e,'ssh_public_key')}}/>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
            &nbsp;&nbsp;
            <button type="submit" className="btn btn-default" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </EmptyState>
    )
  }
}

export default CreateUserForm;
