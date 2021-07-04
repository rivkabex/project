import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './User'
import Welcome from './Welcome'
import { Provider } from 'react-redux'
import store from './Redux/Store/Store';

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <User></User>
        <Welcome></Welcome>
      </div>
    </Provider>


  );
}

export default App;
