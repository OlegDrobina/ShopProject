import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import selector from "../../redux/products/selectors";
import productAsyncActions from "../../redux/products/saga/asyncAction";
import { List, Typography, Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";

const ProductsList = () => {
  const dispatch = useDispatch();
  const productItems = useSelector(selector.items);

  useEffect(() => {
    dispatch(productAsyncActions.getProductAction());
  }, [dispatch]);

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          fontWeight: "bold",
          backgroundColor: "#90EE90",
          p: 1,
          m: 0,
        }}
      >
        <Typography sx={{ flex: 1, textAlign: "center" }}>Id</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Category</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Name</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Quantity</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Price</Typography>
        <Typography sx={{ flex: 0.57, textAlign: "center" }}></Typography>
      </Box>
      <List sx={{ p: 0, m: 0 }}>
        {productItems.map((item, index) => (
          <ListItem
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: index % 2 === 0 ? "#D3D3D3" : "#90EE90",
              borderRadius: 0,
              p: 1,
              m: 0,
              minHeight: "auto",
            }}
          >
            <Typography sx={{ flex: 1, textAlign: "center" }}>
              {item.id}
            </Typography>
            <Typography sx={{ flex: 1, textAlign: "center" }}>
              {item.category}
            </Typography>
            <Typography sx={{ flex: 1, textAlign: "center" }}>
              {item.name}
            </Typography>
            <Typography sx={{ flex: 1, textAlign: "center" }}>
              {item.quantity}
            </Typography>
            <Typography sx={{ flex: 1, textAlign: "center" }}>
              {item.price}
            </Typography>
            <Box sx={{ flex: 0.3, display: "flex", justifyContent: "center" }}>
              <IconButton
                onClick={() => console.log("Edit", item.id)}
                color='primary'
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => console.log("Delete", item.id)}
                color='error'
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductsList;
