import { ADD_TODO } from "./action";
const initState = {
  todos: [],
};

const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...payload] };
    default: {
      return state;
    }
  }
};

export { todoReducer };
