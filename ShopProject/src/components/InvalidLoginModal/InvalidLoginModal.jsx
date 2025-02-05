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

const InvalidLoginModal = (props) => {
  const { open, onClose } = props;
  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <Box sx={boxStyle}>
          <Typography
            sx={{
              mt: 2,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              pt: 1,
              color: "green",
              fontWeight: "bold",
            }}
          >
            Invalid username or password specified. Verify that you have entered
            correct data or contact your system administrator.
          </Typography>
          <Box
            sx={{ display: "flex", mt: 3, justifyContent: "flex-end", pt: 0 }}
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
              OK
            </Button>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default InvalidLoginModal;
