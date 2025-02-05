import { push } from "redux-first-history";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const ProductsPreviewButton = () => {
  const dispatch = useDispatch();
  const handelePreviewButtonClick = () => {
    dispatch(push("/preview"));
  };
  return (
    <Button
      variant='contained'
      color='black'
      onClick={handelePreviewButtonClick}
      sx={{ backgroundColor: "white" }}
      startIcon={<PermIdentityIcon />}
    >
      Preview
    </Button>
  );
};

export default ProductsPreviewButton;
