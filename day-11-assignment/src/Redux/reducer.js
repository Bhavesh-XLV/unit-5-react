import { ADD_TODO } from "./action";
const initState = {
  todos: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }

    default:
      return state;
  }
};

export { reducer };
