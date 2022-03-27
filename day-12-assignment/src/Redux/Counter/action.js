export const ADD_COUNT = "ADD_COUNT";
export const DEC_COUNT = "DEC_COUNT";

export const addCount = (payload) => {
  return {
    type: ADD_COUNT,
    payload,
  };
};
export const decCount = (payload) => {
  return {
    type: DEC_COUNT,
    payload,
  };
};
