import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import CurriculumApp from './CurriculumApp';
import { store } from './store';
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

    <CurriculumApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
