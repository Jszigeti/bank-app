import {
  RETRIEVE_TOKEN_SUCCESS,
  RETRIEVE_TOKEN_FAILURE,
  LOGOUT,
  GET_USER_DATA,
  EDIT_USER_NAME,
  EDIT_MODE,
} from "../actions/user.actions";

const initialState = {
  token: null,
  error: null,
  userData: {},
  editMode: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_TOKEN_SUCCESS:
      return { ...state, token: action.payload, error: null };
    case RETRIEVE_TOKEN_FAILURE:
      return { ...state, token: null, error: action.payload };
    case LOGOUT:
      return { ...state, token: null };
    case GET_USER_DATA:
      return { ...state, userData: action.payload };
    case EDIT_USER_NAME:
      return { ...state, userData: action.payload };
    case EDIT_MODE:
      return { ...state, editMode: action.payload };
    default:
      return state;
  }
}
