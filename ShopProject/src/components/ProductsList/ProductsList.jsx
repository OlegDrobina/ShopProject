import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import selector from "../../redux/products/selectors";
import productAsyncActions from "../../redux/products/saga/asyncAction";
import { List, Typography, Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import DeleteProductModal from "../DeleteProductModal/DeleteProductModal";
import ProductModal from "../ProductModal/ProductModal";

const ProductsList = () => {
  const dispatch = useDispatch();
  const productItems = useSelector(selector.items);
  const [selectedRecordId, setSelectedRecordId] = useState(null);
  const [selectedRecordName, setSelectedRecordName] = useState("");
  const [selectedRecordCategory, setSelectedRecordCategory] = useState("");
  const [selectedRecordPrice, setSelectedRecordPrice] = useState(0.0);
  const [selectedRecordQuantity, setSelectedRecordQuantity] = useState(0);
  const [selectedRecordDescription, setSelectedRecordDescription] =
    useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleEditButtonClick = (item) => {
    setSelectedRecordId(item.id);
    setSelectedRecordName(item.name);
    setSelectedRecordCategory(item.category);
    setSelectedRecordQuantity(item.quantity);
    setSelectedRecordPrice(item.price);
    setSelectedRecordDescription(item.description);
    setOpenEditModal(true);
  };

  const handleConfirmEdit = (values) => {
    dispatch(productAsyncActions.editProductAction(values));
    setOpenEditModal(false);
  };

  const handleDeleteButtonClick = (recordId) => {
    setSelectedRecordId(recordId);
    setOpenDeleteModal(true);
  };

  const handleConfirmDelete = (recordId) => {
    dispatch(productAsyncActions.deleteProductAction(recordId));
    setOpenDeleteModal(false);
  };

  useEffect(() => {
    dispatch(productAsyncActions.getProductAction());
  }, [dispatch]);

  const typographyStyles = { flex: 1, textAlign: "center", fontWeight: "bold" };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "872px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        paddingLeft: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "bold",
          backgroundColor: "#90EE90",
          width: "100%",
          p: 1,
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <Typography sx={typographyStyles}>Id</Typography>
        <Typography sx={typographyStyles}>Category</Typography>
        <Typography sx={typographyStyles}>Name</Typography>
        <Typography sx={typographyStyles}>Quantity</Typography>
        <Typography sx={typographyStyles}>Price (₴)</Typography>
        <Typography sx={{ flex: 0.5, textAlign: "center" }}></Typography>
      </Box>
      <List sx={{ width: "100%", p: 0, m: 0, overflow: "hidden" }}>
        {productItems.map((item, index) => (
          <ListItem
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: index % 2 === 0 ? "#D3D3D3" : "#90EE90",
              color: index % 2 === 0 ? "#c11c84" : "white",
              p: "8px 0",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography sx={typographyStyles}>{item.id}</Typography>
            <Typography sx={typographyStyles}>{item.category}</Typography>
            <Typography sx={typographyStyles}>{item.name}</Typography>
            <Typography sx={typographyStyles}>{item.quantity}</Typography>
            <Typography sx={typographyStyles}>{item.price}</Typography>
            <Box sx={{ flex: 0.5, display: "flex", justifyContent: "center" }}>
              <IconButton
                onClick={() => handleEditButtonClick(item)}
                color='black'
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => handleDeleteButtonClick(item.id)}
                color='black'
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
      <DeleteProductModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        recordId={selectedRecordId}
      />
      <ProductModal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        onConfirm={handleConfirmEdit}
        recordId={selectedRecordId}
        recordName={selectedRecordName}
        recordCategory={selectedRecordCategory}
        recordQuantity={selectedRecordQuantity}
        recordPrice={selectedRecordPrice}
        recordDescription={selectedRecordDescription}
        operationMode='Edit'
      />
    </Box>
  );
};

export default ProductsList;
