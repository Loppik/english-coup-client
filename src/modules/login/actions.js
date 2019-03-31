import * as actionTypes from './actionTypes';
import axios from '../../axios';
import jwt from 'jsonwebtoken';

export const loginUserRequest = () => ({
  type: actionTypes.LOGIN_USER_REQUEST,
});

export const loginUserSuccess = (token, data) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  token,
  data,
});

export const loginUserFailure = err => ({
  type: actionTypes.LOGIN_USER_FAILURE,
  err,
});

export const loginUser = (loginDataObject, history) => (dispatch) => {
  dispatch(loginUserRequest());

  axios.post('/signin', loginDataObject)
    .then((response) => {
      if (response.data.msg[0].length > 20) {
        console.log(response.data.msg[0]);
        jwt.verify(response.data.msg[0], 'oeRaYY7Wo24sDqKSX3IM9ASGmdGPmkTd9jo1QTy4b7P9Ze5_9hKolVX8xNrQDcNRfVEdTZNOuOyqEGhXEbdJI-ZQ19k_o9MI0y3eZN2lp9jow55FfXMiINEdt1XR85VipRLSOkT6kSpzs2x-jbLDiz9iFVzkd81YKxMgPA7VfZeQUm4n-mOmnWMaVX30zGFU4L3oPBctYKkl4dYfqYWqRNfrgPJVi5DGFjywgxx0ASEiJHtV72paI3fDR2XwlSkyhhmY-ICjCRmsJN4fX1pdoL8a18-aQrvyu4j0Os6dVPYIoPvvY0SAZtWYKHfM15g7A3HD4cVREf9cUsprCPK93l', function(err, decoded) {
          dispatch(loginUserSuccess(response.data.msg[0], {email: decoded}));
          localStorage.setItem('token', response.data.msg[0]);
          history.push('/');
        });
      }
      else { 
        dispatch(loginUserFailure(response.data.msg[0]));
      }
    })
    .catch((err) => {
      dispatch(loginUserFailure(err));
    })
};