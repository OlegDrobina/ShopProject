import { createSlice } from "@reduxjs/toolkit";
import { push } from "redux-first-history";

const initialState = {
  isAuthTokenValid: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginSuccessfull: (state) => {
      state.isAuthTokenValid = true;
    },
  },
});

export const performLogin = (credentials) => (dispatch) => {
  try {
    const { username, password } = credentials;
    if (username == "Test" && password == "Test") {
      dispatch(loginSuccessfull());
      localStorage.setItem("authToken", "TestAuthToken13291");
      dispatch(push("/products"));
    } else {
      console.error("Incorrect login or password!");
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
export const { loginSuccessfull } = authSlice.actions;
