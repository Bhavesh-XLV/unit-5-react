export const AUTH = "AUTH";

export const auth = (payload) => {
  return {
    type: AUTH,
    payload,
  };
};
