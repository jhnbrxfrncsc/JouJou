import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components 
import App from './App';

// Theme
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

// Redux
import reducers from './redux/reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(
  reducers, 
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ) 
);

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  root
);