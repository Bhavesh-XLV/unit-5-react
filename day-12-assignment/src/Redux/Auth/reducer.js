import { AUTH } from "./action";
const initState = {
  auth: false,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH:
      localStorage.setItem("status",false)
      return { ...state, payload };
    default: {
      return state;
    }
  }
};

export { authReducer };
