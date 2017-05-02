import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import YourProfile from './components/YourProfile';
import NoMatch from './components/NoMatch';
import { setUser } from './actions'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {

  constructor(){
      super();
      // this.state = {
      //   isLogin: false
      // }
      // this.loginFunction = this.loginFunction.bind(this);
      this.logout = this.logout.bind(this);
    }

    checkLogin(){
      if(this.props.userLogin.id !== 0) return true;
      // if(window.localStorage.getItem('user')) return true;
      return false;
    }

  // loginFunction(user){
  //   window.localStorage.setItem('user', user.username);
  //   this.setState({isLogin: true})
  //   console.log('--',window.localStorage.getItem('user'));
  // }

  logout(){
    this.props.setUser({
      id: 0,
      username: ''
    });
    // window.localStorage.removeItem('user');
    // this.setState({isLogin: false})
  }

  render() {
    return (
    <BrowserRouter>
    <MuiThemeProvider>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
      <ul className="nav-ul">
        <li className="nav-li"><Link className="nav-link" to="/">Home</Link></li>
        {!this.checkLogin() ? (<div>
          <li className="nav-li"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-li"><Link className="nav-link" to="/signin">Signin</Link></li>
          </div>
        ) : (
          <div>
          <li className="nav-li"><Link className="nav-link" to="/profile">Profile</Link></li>
          <li className="nav-li"><a href="#" className="nav-link" onClick={this.logout} >Logout</a></li>
          </div>
          )}
      </ul>
      </div>

      <hr/>

      <Switch>

      <Route exact path="/" render={() => (
        !this.checkLogin() ? (
          <Redirect to="/login"/>
        ) : (
          <Home />
        )
      )}/>
      <Route path="/login" component={Login}/>
      <Redirect from="/signin" to="/login"/>
      <Route path="/profile" render={() => (
        !this.checkLogin() ? (
          <Redirect to="/login"/>
        ) : (
          <YourProfile />
        )
      )}/>
      <Route component={NoMatch}  />
      </Switch>

    </div>
    </MuiThemeProvider>
    </BrowserRouter>
  )
}
}

const mapStateToProps = (state) => {
  return {
    userLogin: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
