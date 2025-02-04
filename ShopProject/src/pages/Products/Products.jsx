import { Box, Typography } from "@mui/material";
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
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            width: "284px",
            height: "77px",
          }}
          variant='h1'
        >
          Products
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "background.paper",
          mt: 10,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "800px",
          overflow: "hidden",
          paddingBottom: 0,
          flexGrow: 1,
        }}
      >
        <ProductsList />
      </Box>
    </>
  );
};

export default Products;
