import { Button } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const ProductsPreviewButton = () => {
  return (
    <Button
      variant='contained'
      color='black'
      sx={{ backgroundColor: "white" }}
      startIcon={<PermIdentityIcon />}
    >
      Preview
    </Button>
  );
};

export default ProductsPreviewButton;
