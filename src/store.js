import thunk from 'redux-thunk';

const intialState = {};
const middleWare = [thunk];

const store = createStore( rootReducer , intialState, middleWare);

export  default  store;