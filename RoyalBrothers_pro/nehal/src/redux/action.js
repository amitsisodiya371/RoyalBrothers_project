import { GET_DATA } from "./actionType";

const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};

export { getData };
