import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div>
      {props.counter}
      <br/>
      <button onClick={() => props.onIncrement()}>increment</button>
      <button onClick={() => props.onAdd()}>add</button>
      <button onClick={() => props.onDecrement()}>decrement</button>
      <button onClick={() => props.onSubtract()}>subtract</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({type: 'INC_COUNTER'}),
    onAdd: () => dispatch({type: 'ADD_COUNTER', value: 100}),
    onDecrement: () => dispatch({type: 'DEC_COUNTER'}),
    onSubtract: () => dispatch({type: 'SUB_COUNTER', value: 25})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
