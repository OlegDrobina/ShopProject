import { Box } from "@mui/material";
import LogoImageWithText from "../../components/LogoImageWithText/LogoImageWithText";
import AddProductButton from "../../components/AddProductButton/AddProductButton";
import ProductsPreviewButton from "../../components/ProductsPreviewButton/ProductsPreviewButton";
import ProductsList from "../../components/ProductsList/ProductsList";
const Products = () => {
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
          bgcolor: "background.paper",
          mt: 0,
          mx: 38,
        }}
      >
        <ProductsList />
      </Box>
    </>
  );
};

export default Products;
