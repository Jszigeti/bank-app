import axios from "axios";

export const RETRIEVE_TOKEN_SUCCESS = "RETRIEVE_TOKEN_SUCCESS";
export const RETRIEVE_TOKEN_FAILURE = "RETRIEVE_TOKEN_FAILURE";
export const LOGOUT = "LOGOUT";
export const GET_USER_DATA = "GET_USER_DATA";

// Get the token by sending ids to the API then retrieve user data
export const login = (ids, rm) => {
  return async (dispatch) => {
    try {
      return await axios
        .post("http://localhost:3001/api/v1/user/login", ids)
        .then((res) => {
          // If remember-me is checked, the token is stored in sessionStorage
          if (rm) {
            sessionStorage.setItem("token", res.data.body.token);
          }
          // Get user data
          dispatch(getUserData(res.data.body.token));
          // Dispatch the token to the store
          dispatch({
            type: RETRIEVE_TOKEN_SUCCESS,
            payload: res.data.body.token,
          });
        });
    } catch (err) {
      // Dispatch the error to the store
      dispatch({
        type: RETRIEVE_TOKEN_FAILURE,
        payload: "ID ou mot de passe incorrect.",
      });
    }
  };
};

// Logout fonction
export const logout = () => {
  if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
  }
  return {
    type: "LOGOUT",
  };
};

// Get user data by sending the token to the API
export const getUserData = (token) => {
  return (dispatch) => {
    axios
      .post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // Dispatch user data to the store
        dispatch({ type: GET_USER_DATA, payload: res.data.body });
      });
  };
};
