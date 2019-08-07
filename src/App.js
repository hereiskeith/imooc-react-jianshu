import React from 'react';
import GlobalStyle from './style.js';
import GlobalStyle2 from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store = {store}>
    <React.Fragment>
      <GlobalStyle />
      <GlobalStyle2 />
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/detail' exact component={Detail} />
        </div>
      </BrowserRouter>
     </React.Fragment>
    </Provider>
  );
}

export default App;
