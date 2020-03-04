import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './Button';
import ListButton from './ListButton';
import ButtonNav from './ButtonNav';
import Checkbox from './Checkbox';
import ResponsiveDrawer from './ResponsiveDrawer';
import Body from './Body';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<Button/>, document.getElementById('root'));
ReactDOM.render(<Body />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
