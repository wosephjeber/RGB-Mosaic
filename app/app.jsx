import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as Store from 'app/store';
import 'app/styles/style.scss';
import RGBMosaic from 'app/containers/rgb_mosaic';

const store = Store.create();

ReactDOM.render(
  <Provider store={store}>
    <RGBMosaic />
  </Provider>,
  document.querySelector('#app')
)
