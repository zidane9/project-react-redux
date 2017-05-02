import * as ActionTypes from '../actions/actionTypes';

const initialState = [
  {
    id: 1,
    username: 'dina19',
    name: 'Dina',
    company: 'PT Era Teknologi',
    position: 'Sales',
    email: 'dina19@yahoo.com',
    phone: '+62-8912390123',
    otherCards: [2,3],
    requestFrom: [],
    createdAt: '2017-01-03'
  },{
    id: 2,
    username: 'john3',
    name: 'John Doe',
    company: 'PT John Sukses',
    position: 'Director',
    email: 'john3@johnsukses.com',
    phone: '+62-853123090',
    otherCards: [1,3],
    requestFrom: [],
    createdAt: '2016-05-20'
  },{
    id: 3,
    username: 'frank90',
    name: 'Franky Jay',
    company: 'CV Maju Mundur',
    position: 'Office Boy',
    email: 'frank90@gmail.com',
    phone: '+62-8222123987678',
    otherCards: [1],
    requestFrom: [],
    createdAt: '2017-03-10'
  }
]

const fetchData = (state, username) => {
  const profile = state.filter(card => card.username === username);
  if(profile.length === 0 ){
    const ids = state.map(card => card.id);
    const newId = Math.max(...ids)+1;
    let newProfile = {
      id: newId,
      username: username,
      otherCards: [],
      requestFrom: [],
      createdAt: new Date()
    }
    return [...state, newProfile];
  }
  return state;
}

const editProfile = (state, card) => {
  const newState = state.map(item => {
    if(item.id === card.id){
      return card;
    }
    return item;
  })
  return newState;
}

const removeData = (state, itemId) => {
  // const deletedId = itemId;
  const newState = state.filter(item => item.id !== itemId);
  return newState;
}

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA: return fetchData(state, action.payload);
    case ActionTypes.EDIT_PROFILE: return editProfile(state, action.payload);
    case ActionTypes.DELETE_DATA: return removeData(state, action.payload);
    default: return state;

  }
}

export default cardReducer;
