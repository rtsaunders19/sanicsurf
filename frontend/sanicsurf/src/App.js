import React, { Component } from 'react';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { Link, IndexLink, ReactRouter } from 'react-router';
import { firebase, auth } from './utils/firebase';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SanicProfileList from './components/SanicProfileList';
import WaitingPage from './components/WaitingPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      start: false
}
}

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  loginButtonClicked(e) {
    e.preventDefault();

    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  logoutButtonClicked(e) {
    e.preventDefault();

    auth.signOut();
  }

componentDidUpdate(prevState) {
  // only update chart if the data has changed
  if (prevState.start !== this.state.start) {
    this.sessionButton()
    };
  }

handleClick() {
  this.setState({
    start: true
  })
}



  sessionButton() {
    if (this.state.currentUser && this.state.start) {
      return <SanicProfileList />
    } else if (this.state.currentUser) {
      return <WaitingPage displayName={this.state.currentUser.displayName} logoutButtonClicked={this.logoutButtonClicked}/>
    } else {
      return <LoginButton loginButtonClicked={ this.loginButtonClicked }>Log in with Google</LoginButton>;
    }
  }

  render() {
    return (
      <section>

        { this.sessionButton() }

        {/*<button onClick={this.handleClick.bind(this)}>HELLOOOOOOOOOOo</button> */}

      </section>
    );
  }
}

export default App;
