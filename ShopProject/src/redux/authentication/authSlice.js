import { createSlice } from "@reduxjs/toolkit";
import { push } from "redux-first-history";

const initialState = {
  isAuthTokenValid: false,
  isInvalidLoginModalOpen: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginSuccessfull: (state) => {
      state.isAuthTokenValid = true;
      localStorage.setItem("authToken", "TestAuthToken13291");
    },
    loginFailed: (state) => {
      state.isInvalidLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isInvalidLoginModalOpen = false;
    },
    tokenExpired: (state) => {
      state.isAuthTokenValid = false;
    },
  },
});

export const performLogin = (credentials) => (dispatch) => {
  try {
    const { username, password } = credentials;
    if (username == "Test" && password == "Test") {
      dispatch(loginSuccessfull());
      dispatch(push("/products"));
    } else {
      dispatch(loginFailed());
    }
  } catch (e) {
    console.error(`Login failed ${e}`);
  }
};

export const checkAuthData = (authTokenValue) => (dispatch) => {
  if (authTokenValue == "TestAuthToken13291") {
    dispatch(loginSuccessfull());
    dispatch(push("/products"));
  }
};

export default authSlice.reducer;
export const { loginSuccessfull, loginFailed, closeLoginModal, tokenExpired } =
  authSlice.actions;
