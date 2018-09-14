import React, { Component } from 'react';
import logo from './logo.svg';
import CheckoutForm from './CheckoutForm';
import './App.css';
//a
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Stripe Payments Demo App</h2>
          <p className="App-intro">
            <CheckoutForm
              name={'Test Stripe App'}
              description={'Product Name here'}
              amount={10}
              />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
