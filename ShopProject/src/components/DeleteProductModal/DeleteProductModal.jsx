import Modal from "@mui/material/Modal";
import { Box, Container, Typography, Button } from "@mui/material";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "429px",
  height: "146px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const DeleteProductModal = (props) => {
  const { recordId, open, onClose, onConfirm } = props;
  return (
    <Modal open={open} onClose={onClose}>
      <Container id='delete-product-modal-container-id'>
        <Box sx={boxStyle}>
          <Typography
            id='modal-modal-description'
            sx={{
              mt: 2,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              pt: 4,
              color: "green",
              fontWeight: "bold",
            }}
          >
            Are you sure you want to delete this product?
          </Typography>
          <Box
            sx={{ display: "flex", mt: 3, justifyContent: "flex-end", pt: 2 }}
          >
            <Button
              sx={{
                width: 111,
                height: 33,
                borderRadius: 0,
                backgroundColor: "grey",
                color: "white",
                fontWeight: "bold",
              }}
              onClick={onClose}
              variant='outlined'
              color='primary'
            >
              Cancel
            </Button>
            <Button
              sx={{
                width: 111,
                height: 33,
                borderRadius: 0,
                ml: 2,
                fontWeight: "bold",
              }}
              onClick={() => onConfirm(recordId)}
              variant='contained'
              color='error'
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default DeleteProductModal;
