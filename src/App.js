import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    var config = {
    apiKey: "AIzaSyDJgQmeCZ2PrS2dUgqqVjMlCo8Am26f044",
    authDomain: "manager-8089e.firebaseapp.com",
    databaseURL: "https://manager-8089e.firebaseio.com",
    projectId: "manager-8089e",
    storageBucket: "manager-8089e.appspot.com",
    messagingSenderId: "1064736464542"
  };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
