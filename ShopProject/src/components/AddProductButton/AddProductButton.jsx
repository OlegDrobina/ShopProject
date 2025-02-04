import { useState } from "react";
import { useDispatch } from "react-redux";
import productAsyncActions from "../../redux/products/saga/asyncAction";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ProductModal from "../ProductModal/ProductModal";

const AddProductButton = () => {
  const dispatch = useDispatch();
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const handleOpen = () => setOpenAddProductModal(true);
  const handleClose = () => setOpenAddProductModal(false);

  const handleConfirmAddProduct = (values) => {
    dispatch(productAsyncActions.createProductAction(values));
    setOpenAddProductModal(false);
  };

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
      <ProductModal
        open={openAddProductModal}
        onClose={handleClose}
        onConfirm={handleConfirmAddProduct}
        operationMode='Add'
      />
    </>
  );
};

export default AddProductButton;
