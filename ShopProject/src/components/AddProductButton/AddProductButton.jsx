import { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
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
  width: 532,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const AddProductButton = () => {
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
            }}
          >
            <Typography variant='h6' component='h2'>
              Add product
            </Typography>
            <Button endIcon={<CloseIcon />} onClick={handleClose}></Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "grey",
              height: "-webkit-fill-available",
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <InputLabel htmlFor='category-input-id' sx={{ color: "white" }}>
                Category
              </InputLabel>
              <TextField
                id='category-input-id'
                type='text'
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
                sx={{
                  backgroundColor: "white",
                  width: 360,
                }}
              />
            </Box>
            <Box>
              <InputLabel htmlFor='quantity-input-id' sx={{ color: "white" }}>
                Quantity
              </InputLabel>
              <TextField
                id='quantity-input-id'
                type='text'
                sx={{
                  backgroundColor: "white",
                  width: 360,
                }}
              />
            </Box>
            <Box>
              <InputLabel htmlFor='price-input-id' sx={{ color: "white" }}>
                Price
              </InputLabel>
              <TextField
                id='price-input-id'
                type='text'
                sx={{
                  backgroundColor: "white",
                  width: 360,
                }}
              />
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
                multiline
                maxRows={4}
                sx={{
                  backgroundColor: "white",
                  width: 360,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Modal>
    </>
  );
};

export default AddProductButton;
