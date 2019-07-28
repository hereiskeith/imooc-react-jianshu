import React from 'react';
import GlobalStyle from './style.js';
import GlobalStyle2 from './statics/iconfont/iconfont';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store = {store}>
    <React.Fragment>
      <GlobalStyle />
      <GlobalStyle2 />
      <Header />
     </React.Fragment>
    </Provider>
  );
}

export default App;
