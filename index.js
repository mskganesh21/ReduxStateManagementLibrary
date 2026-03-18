const redux = require('redux')

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action creator
function buyCake() {
  //action
  return {
    type: BUY_CAKE,
    info: 'first redux action',
  }
}

//initial state
const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
}

//initial cake state
const initialCakeState = {
  numOfCakes: 10,
}

//initial ice cream state
const initialIceCreamState = {
  numOfIceCreams: 20,
}

//reducer function for cake
const cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state
  }
}

//reducer function for ice cream
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      }
    default:
      return state
  }
}

const combineReducers = redux.combineReducers

const rootReducer = combineReducers({
  cake: cakereducer,
  iceCream: iceCreamReducer,
})
const store = redux.createStore(rootReducer)

console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() =>
  console.log('updated state', store.getState())
)
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
