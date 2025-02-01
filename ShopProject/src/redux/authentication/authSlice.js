import { createSlice } from "@reduxjs/toolkit";
import { push } from "redux-first-history";

const initialState = {
  isAuthenticated: false,
  userName: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginSuccessfull: (state) => {
      state.isAuthenticated = true;
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
      console.error("Incorrect login or password!");
    }
  } catch (e) {
    console.error(`Login failed ${e}`);
  }
};

export default authSlice.reducer;
export const { loginSuccessfull } = authSlice.actions;
