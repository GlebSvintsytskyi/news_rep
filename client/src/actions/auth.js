import { setUser, logout } from '../store/userReducer'
import AuthServices from '../services/auth.services'

export const registration = (email, password) => (dispatch) => {
    return AuthServices.registr(email, password).then(
      (response) => {
        dispatch( setUser(response) );
  
        return Promise.resolve();
      },
      (error) => {
        alert(error);
        return Promise.reject();
      }
    );
  };

  export const login = (username, password) => (dispatch) => {
    return AuthServices.login(username, password).then(
      (response) => {
        dispatch( setUser(response) );
  
        return Promise.resolve();
      },
      (error) => {
        alert(error);
        return Promise.reject();
      }
    );
  };

  export const exit = () => (dispatch) => {
    AuthServices.logout();
  
    dispatch( logout() );
  };