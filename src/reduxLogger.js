import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger({});

const initialCakeState = {
  numOfCakes: 10,
};

const initialCreamState = {
  numOfCream: 20,
};

const BUY_CAKE = "BUY_CAKE";
const BUY_CREAM = "BUY_CREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "action to buy cake",
  };
}

function buyCream() {
  return {
    type: BUY_CREAM,
    info: "action to buy cream",
  };
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const creamReducer = (state = initialCreamState, action) => {
  switch (action.type) {
    case BUY_CREAM:
      return {
        ...state,
        numOfCream: state.numOfCream - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({ cake: cakeReducer, cream: creamReducer });

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state : ", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyCream());
store.dispatch(buyCream());

unsubscribe();
