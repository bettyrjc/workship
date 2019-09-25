import axios from 'axios';
import {
  GET_COMMENTS,
  GET_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from './types';
// dispatch : es parte de nuestro state.

export const getComments= ()=> async dispatch =>{
  const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
  dispatch({
    type:GET_COMMENTS,
    payload: res.data
  })
}
export const getComment = id => async dispatch =>{
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
  dispatch({
    type:GET_COMMENT,
    payload: res.data
  })
}
export const deleteComment = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch({
      type: DELETE_COMMENT,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_COMMENT,
      payload: id
    });
  }
};

export const addComment = comment => async dispatch => {
  const res = await axios.post(
    'https://jsonplaceholder.typicode.com/comments',
    comment
  );
  dispatch({
    type: ADD_COMMENT,
    payload: res.data
  });
};

export const updateComment = comment => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/comments/${comment.id}`,
    comment
  );
  
  dispatch({
    type: UPDATE_COMMENT,
    payload: res.data
  });
};
