import {
  GET_USERS,
  GET_USER,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  USER_LOADING,
  USER_END_LOADING,
  USER_RESET_DATA
} from './types';
import axios from 'axios';
// dispatch : es parte de nuestro state.

export const getUsers = ()=> async dispatch =>{
  
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  dispatch({
    type:GET_USERS,
    payload: res.data
  })
}
export const getUser = id => async dispatch =>{
 
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  dispatch({
    type:GET_USER,
    payload: res.data
  })
}
export const deleteUser = id => async dispatch => {
 
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    removeUserLoading(dispatch);
    dispatch({
      type: DELETE_USER,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_USER,
      payload: id
    });
  }
};

export const addContact = contact => async dispatch => {
  
  const res = await axios.post(
    'https://jsonplaceholder.typicode.com/users',
    contact
  );
  dispatch({
    type: ADD_USER,
    payload: res.data
  });
};

export const updateUser = user => async dispatch => {
  UserLoading(dispatch);
  try{
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      user
    );
    dispatch({
      type: UPDATE_USER,
      payload: res.data
    });
    removeUserLoading(dispatch);
  }catch(err){
    removeUserLoading(dispatch);
    console.log('error')
  }
};

export const UserLoading = dispatch => {
  dispatch({
    type: USER_LOADING
  });
};

export const removeUserLoading = dispatch => {
  dispatch({
    type: USER_END_LOADING
  });
};
export const resetUserData = () => async dispatch => {
  dispatch({
    type: USER_RESET_DATA
  });
};
