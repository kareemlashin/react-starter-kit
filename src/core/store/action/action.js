import axios from "axios";

const Types = {
  get: "GET_ROLES",
  TRUE_LOADING: "SET_LOADING_TRUE",
  FALSE_LOADING: "SET_LOADING_FALSE",
};
export const getRolesUser = () => {
  return (dispatch) => {
    dispatch({
      type: "ROLES",
      gets: false,
    });
    dispatch({
        type: "GET_ROLES",
        data:[]
      });
      dispatch({
        type: "ROLES",
        data: true,
      });
  };
};
