import * as ActionTypes from './actionTypes';



// export const fetchDataSearch = (query) => {
//   return (dispatch) => {
//     fetch(`http://swapi.co/api/${query.type}/${query.item}`)
//     .then(response => response.json())
//     .then(data => { dispatch(addData(data)) })
//     .catch(err => console.error(err))
//   }
// }

export const fetchData = (cards) => {
  return {
    type: ActionTypes.FETCH_DATA,
    payload: cards
  }
}

export const editProfile = (card) => {
  return {
    type: ActionTypes.EDIT_PROFILE,
    payload: card
  }
}

export const deleteData = (itemId) => {
  return {
    type: ActionTypes.DELETE_DATA,
    payload: itemId
  }
}

// login
export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user
  }
}
