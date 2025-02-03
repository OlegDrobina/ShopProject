import { useState } from "react";
import { useDispatch } from "react-redux";
import productAsyncActions from "../../redux/products/saga/asyncAction";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { Formik, Form } from "formik";
import {
  Box,
  Typography,
  Container,
  TextField,
  InputLabel,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "429px",
  height: "532px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const AddProductButton = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant='contained'
        color='black'
        sx={{ backgroundColor: "white" }}
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Add product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Container id='modal-main-container-id' sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "15px",
              width: "429px",
              height: "43px",
            }}
          >
            <Typography variant='h6' component='h2'>
              Add product
            </Typography>
            <Button
              endIcon={<CloseIcon />}
              sx={{ marginBottom: "10px", marginRight: "20px" }}
              onClick={handleClose}
            ></Button>
          </Box>
          <Formik
            initialValues={{
              category: "",
              name: "",
              price: "",
              quantity: "",
              description: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Product name is required";
              }
              if (values.price && !values.price.match("[0-9]+\\.[0-9]+")) {
                errors.price = "Price should be decimal";
              }
              if (values.quantity && !values.quantity.match("[0-9]+")) {
                errors.quantity = "Quantity should contain numbers";
              }
              if (values.quantity && values.quantity.match("^-+")) {
                errors.quantity = "Quantity cannot be negative";
              }
              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              dispatch(productAsyncActions.createProductAction(values));
              resetForm();
              handleClose();
            }}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form>
                <Box
                  sx={{
                    backgroundColor: "grey",
                    width: "413px",
                    height: "489px",
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 1,
                  }}
                >
                  <Box>
                    <InputLabel
                      htmlFor='category-input-id'
                      sx={{ color: "white" }}
                    >
                      Category
                    </InputLabel>
                    <TextField
                      id='category-input-id'
                      type='text'
                      name='category'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                      InputProps={{
                        sx: {
                          borderRadius: "0px",
                          width: "360px",
                          height: "31px",
                        },
                      }}
                      sx={{
                        backgroundColor: "white",
                        width: 360,
                      }}
                    />
                  </Box>
                  <Box>
                    <InputLabel htmlFor='name-input-id' sx={{ color: "white" }}>
                      Name
                    </InputLabel>
                    <TextField
                      id='name-input-id'
                      type='text'
                      name='name'
                      error={Boolean(errors.name && touched.name)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      InputProps={{
                        sx: {
                          borderRadius: "0px",
                          width: "360px",
                          height: "31px",
                        },
                      }}
                      sx={{
                        backgroundColor: "white",
                        width: 360,
                      }}
                    />
                    {touched.name && errors.name && (
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "12px",
                          width: "358px",
                          backgroundColor: "red",
                          marginLeft: "1px",
                          paddingLeft: "1px",
                          marginTop: "0px",
                        }}
                      >
                        {errors.name}
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    <InputLabel
                      htmlFor='quantity-input-id'
                      sx={{ color: "white" }}
                    >
                      Quantity
                    </InputLabel>
                    <TextField
                      id='quantity-input-id'
                      type='text'
                      name='quantity'
                      error={Boolean(errors.quantity && touched.quantity)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.quantity}
                      InputProps={{
                        sx: {
                          borderRadius: "0px",
                          width: "360px",
                          height: "31px",
                        },
                      }}
                      sx={{
                        backgroundColor: "white",
                        width: 360,
                      }}
                    />
                    {touched.quantity && errors.quantity && (
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "12px",
                          width: "358px",
                          mt: 0.5,
                          backgroundColor: "red",
                          marginLeft: "1px",
                          paddingLeft: "1px",
                          marginTop: "0px",
                        }}
                      >
                        {errors.quantity}
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    <InputLabel
                      htmlFor='price-input-id'
                      sx={{ color: "white" }}
                    >
                      Price
                    </InputLabel>
                    <TextField
                      id='price-input-id'
                      type='text'
                      name='price'
                      error={Boolean(errors.price && touched.price)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      InputProps={{
                        sx: {
                          borderRadius: "0px",
                          width: "360px",
                          height: "31px",
                        },
                      }}
                      sx={{
                        backgroundColor: "white",
                        width: 360,
                      }}
                    />
                    {touched.price && errors.price && (
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "12px",
                          width: "358px",
                          mt: 0.5,
                          backgroundColor: "red",
                          marginLeft: "1px",
                          paddingLeft: "1px",
                          marginTop: "0px",
                        }}
                      >
                        {errors.price}
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    <InputLabel
                      htmlFor='description-input-id'
                      sx={{ color: "white" }}
                    >
                      Description
                    </InputLabel>
                    <TextField
                      id='description-input-id'
                      type='text'
                      name='description'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      multiline
                      rows={4}
                      InputProps={{
                        sx: {
                          borderRadius: "0px",
                          width: "361px",
                          height: "117px",
                        },
                      }}
                      sx={{
                        backgroundColor: "white",
                        width: 360,
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      paddingLeft: "15px",
                    }}
                  >
                    <Button
                      id='cancel-button-id'
                      sx={{
                        backgroundColor: "#36454F",
                        borderRadius: 0,
                        width: 115,
                        height: 33,
                        color: "white",
                        marginLeft: "112px",
                      }}
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      id='submit-button-id'
                      type='submit'
                      sx={{
                        backgroundColor: "green",
                        borderRadius: 0,
                        width: 116,
                        height: 33,
                        color: "white",
                        marginLeft: "10px",
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Container>
      </Modal>
    </>
  );
};

export default AddProductButton;
