import { ADD_COUNT, DEC_COUNT } from "./action";
const initState = {
  count: 0,
};

const countReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_COUNT: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    case DEC_COUNT: {
      return {
        ...state,
        count: state.count - payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { countReducer };
