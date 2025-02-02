import { Box, List } from "@mui/material";
import LogoImageWithText from "../../components/LogoImageWithText/LogoImageWithText";
import AddProductButton from "../../components/AddProductButton/AddProductButton";
import ProductsPreviewButton from "../../components/ProductsPreviewButton/ProductsPreviewButton";
const ProductsList = () => {
  return (
    <>
      <Box>
        <LogoImageWithText color='white' />
      </Box>
      <Box display='flex' justifyContent='space-between' p={2}>
        <ProductsPreviewButton />
        <AddProductButton />
      </Box>
      <Box
        sx={{
          display: "flex",
          bgcolor: "background.paper",
          mt: "15px",
          alignItems: "center",
          justifyContent: "center",
          mx: 10,
        }}
      >
        <List></List>
      </Box>
    </>
  );
};

export default ProductsList;
