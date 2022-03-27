import { combineReducers, createStore } from "redux";
import { countReducer } from "./Counter/reducer";
import { todoReducer } from "./Todo/reducer";
import { authReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  count: countReducer,
  todos: todoReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
