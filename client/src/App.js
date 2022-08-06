import React, { useEffect} from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useDispatch } from 'react-redux';
import { auth } from './actions/auth';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( auth() );
  }, []);

  return (
      <BrowserRouter> 
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
