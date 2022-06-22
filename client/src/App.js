import React from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter> 
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
