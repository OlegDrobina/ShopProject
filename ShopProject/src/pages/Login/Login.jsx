import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { performLogin } from "../../redux/authentication/authSlice";
import { checkAuthData } from "../../redux/authentication/authSlice";
import LogoImageWithText from "../../components/LogoImageWithText/LogoImageWithText";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Container,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form } from "formik";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuthToken();
  }, []);

  const checkAuthToken = () => {
    const authToken = localStorage.getItem("authToken");
    dispatch(checkAuthData(authToken));
  };

  return (
    <Container
      maxWidth='xs'
      sx={{ backgroundColor: "white", width: "500px", height: "670px" }}
    >
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <LogoImageWithText
          color='green'
          paddingLeft='80px'
          paddingTop='70px'
          paddingBottom='50px'
        />
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Username must be filled in";
            }
            if (!values.password) {
              errors.password = "Password must be filled in";
            }
            return errors;
          }}
          onSubmit={(credentials) => {
            dispatch(performLogin(credentials));
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin='normal'
                label='User Name'
                autoComplete='username'
                variant='filled'
                name='username'
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.username && touched.username)}
                helperText={touched.username && errors.username}
                InputProps={{
                  sx: {
                    backgroundColor: "#D3D3D3",
                    width: "277px",
                    height: "56px",
                    borderRadius: "0px",
                  },
                }}
                sx={{ marginLeft: "60px" }}
              />
              <TextField
                fullWidth
                margin='normal'
                label='Password'
                autoComplete='current-password'
                variant='filled'
                type={showPassword ? "text" : "password"}
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.password && touched.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  sx: {
                    backgroundColor: "#D3D3D3",
                    width: "277px",
                    height: "56px",
                    borderRadius: "0px",
                  },
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge='end'
                        sx={{ color: "green" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ marginLeft: "60px" }}
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                sx={{
                  mt: 2,
                  backgroundColor: "green",
                  width: "277px",
                  height: "56px",
                  fontWeight: "bold",
                }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
