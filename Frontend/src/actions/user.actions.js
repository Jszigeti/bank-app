import axios from "axios";

export const RETRIEVE_TOKEN_SUCCESS = "RETRIEVE_TOKEN_SUCCESS";
export const RETRIEVE_TOKEN_FAILURE = "RETRIEVE_TOKEN_FAILURE";
export const LOGOUT = "LOGOUT";
export const GET_USER_DATA = "GET_USER_DATA";
export const EDIT_USER_NAME = "EDIT_USER_NAME";
export const EDIT_MODE = "EDIT_MODE";

// Get the token by sending ids to the API then retrieve user data
export const login = (ids) => {
  return async (dispatch) => {
    try {
      return await axios
        .post("http://localhost:3001/api/v1/user/login", ids)
        .then((res) => {
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

// Get user data by sending the token to the API
const getUserData = (token) => {
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

// Logout fonction
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

// Edit username by sending the token and new username to the API
export const editUserName = (username, token) => {
  return (dispatch) => {
    axios
      .put("http://localhost:3001/api/v1/user/profile", username, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: EDIT_USER_NAME, payload: res.data.body });
      });
  };
};

// Propagate the editMode state
export const editMode = (editState) => {
  return (dispatch) => {
    dispatch({ type: EDIT_MODE, payload: editState });
  };
};
