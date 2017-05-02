import React from 'react';
import { connect } from 'react-redux';

import { filterProfile } from '../selectors';
import { editProfile } from '../actions';

const styles = {
  card : {
    margin: 20,
    /* Add shadows to create the "card" effect */
    boxShadow: '0 4 8 0 rgba(0,0,0,0.2)',
    border: 'solid grey',
    width: 420,
    transition: '0.3s',
    borderRadius: 5 /* 5px rounded corners */
  },
  container: {
    padding: 20
  },
  input: {
    width: '200px'
  }
}

class YourProfile extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      id: 0,
      username: '',
      name: '',
      company: '',
      position: '',
      email: '',
      phone: ''
    }
  }

  editClick(e){
    e.preventDefault();
    const { profile } = this.props;
    this.setState({
      id: profile.id,
      username: profile.username,
      name: profile.name,
      company: profile.company,
      position: profile.position,
      email: profile.email,
      phone: profile.phone
    })
  }

  cancelClick(e){
    e.preventDefault();
    this.setState({
      id: 0,
      username: '',
      name: '',
      company: '',
      position: '',
      email: '',
      phone: ''
    });
  }

  handleChange(e){
    let newState = {};
    newState[e.target.name] = e.target.value;
    // console.log(this.state);
    this.setState(newState);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.editProfile({
      ...this.props.profile,
      name: this.state.name,
      company: this.state.company,
      position: this.state.position,
      email: this.state.email,
      phone: this.state.phone
    })

    this.setState({
      id: 0,
      username: '',
      name: '',
      company: '',
      position: '',
      email: '',
      phone: ''
    });

  }

  render () {
    const { profile } = this.props;
    return (
      <div>
      <center>
      <fieldset style={styles.card}>
        <legend >Your Profile</legend>
        <div style={styles.container}>
        <form >
          <table>
          <tbody>
            <tr>
              <td>Username </td>
              <td><h5>{profile.username}</h5></td>
            </tr>
            <tr>
              <td>Name </td>
              <td>
                {this.state.id === 0 ? (
                  <h5>{profile.name}</h5>
                ) : (
                  <input name="name" onChange={this.handleChange.bind(this)}
                  value={this.state.name} style={styles.input} type="text" />
                )}
              </td>
            </tr>
            <tr>
              <td>Company </td>
              <td>
                {this.state.id === 0 ? (
                  <h5>{profile.company}</h5>
                ) : (
                  <input name="company" onChange={this.handleChange.bind(this)}
                  value={this.state.company} style={styles.input} type="text" />
                )}
              </td>
            </tr>
            <tr>
              <td>Position </td>
              <td>
                {this.state.id === 0 ? (
                  <h5>{profile.position}</h5>
                ) : (
                  <input name="position" onChange={this.handleChange.bind(this)}
                  value={this.state.position} style={styles.input} type="text" />
                )}
              </td>
            </tr>
            <tr>
              <td>Email </td>
              <td>
                {this.state.id === 0 ? (
                  <h5>{profile.email}</h5>
                ) : (
                  <input name="email" onChange={this.handleChange.bind(this)}
                  value={this.state.email} style={styles.input} type="text" />
                )}
              </td>
            </tr>
            <tr>
              <td>Phone </td>
              <td>
                {this.state.id === 0 ? (
                  <h5>{profile.phone}</h5>
                ) : (
                  <input name="phone" onChange={this.handleChange.bind(this)}
                  value={this.state.phone} style={styles.input} type="text" />
                )}
              </td>
            </tr>
            <tr>
              <td />
              <td>
                {this.state.id === 0 ? (
                  <button onClick={this.editClick.bind(this)} >Edit</button>
                ) : (
                  <div>
                    <button onClick={this.handleSubmit.bind(this)} >Save</button> |
                    <button onClick={this.cancelClick.bind(this)}>Cancel</button>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
          </table>
        </form>
        </div>
        </fieldset>
      </center>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    profile: filterProfile(state.cards, state.user.username)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (card) => dispatch(editProfile(card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourProfile);
