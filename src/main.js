import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import actionCreaterEcho from './action-creater-echo';
import reducerEcho from './reducer-echo';
import Echo from './view-echo';

const store = createStore(reducerEcho);

const applyVal = (e) => {
  let val = e.target.previousElementSibling.value;
  return store.dispatch(actionCreaterEcho(val));
};

const render = () => {
  return ReactDOM.render(
    <Echo inputedVal={ store.getState() } onClick={ applyVal }/>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
