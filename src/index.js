import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import App from './modules/app/containers/App';
import * as serviceWorker from './serviceWorker';

import store from './store';
import { Provider } from 'react-redux';

import Cookie from 'js-cookie';
import english from './locales/english.json';
import russian from './locales/russian.json';

const locale = Cookie.get('locale') || (Cookie.set('locale', 'en-US') && 'en-US');
const messages = locale === 'ru-RU' ? russian : english;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
