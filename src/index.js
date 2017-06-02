import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';


import '../style/style.sass';



class Layout extends React.Component {

  constructor(){
    super();
    this.name = "will"
  }
  render() {

    return (
      <h2> It works {this.name} !!! </h2>
    );
  }
}

const app = document.getElementById("root");

ReactDOM.render(<Layout/>, app);
