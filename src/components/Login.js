import React from 'react';
import { connect } from 'react-redux';

import { setUser } from '../actions';
import { filterProfile } from '../selectors';

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onChangeState = this.onChangeState.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  onChangeState(e){
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
    // console.log(this.state.password);
  }

  signIn(){
    const profile = filterProfile(this.props.cards, this.state.username);
    if(profile !== '') this.props.setUser({
      id: profile.id,
      username: this.state.username
    });
  }

  render(){
    return (
      <div>
        <div>
        User Name : <input onChange={this.onChangeState} type="text" name="username" />
        </div>
        <div>
        Password : <input onChange={this.onChangeState} type="password" name="password"  />
        </div>
        <button onClick={this.signIn}>Sign In </button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    cards : state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
