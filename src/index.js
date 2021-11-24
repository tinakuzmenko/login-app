import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {AuthStoreProvider} from './store/auth-store';

ReactDOM.render(
  <AuthStoreProvider>
    <App />
  </AuthStoreProvider>,
  document.getElementById('root')
);
