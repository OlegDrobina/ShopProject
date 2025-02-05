import { usePreview } from "./hooks/usePreview";
import LogoImageWithText from "../../components/LogoImageWithText/LogoImageWithText";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  CardMedia,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import useAuthSync from "../Login/hooks/useAuthSync";

const Preview = () => {
  const products = usePreview();
  useAuthSync();
  return (
    <>
      <Box>
        <LogoImageWithText color='white' />
      </Box>
      <Grid container spacing={10} marginTop={0}>
        {products.items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: 2,
                textAlign: "center",
                borderRadius: 0,
              }}
            >
              <CardMedia
                component='img'
                image='https://demofree.sirv.com/nope-not-here.jpg'
              />
              <CardContent>
                <Box>
                  <Typography variant='h6'>{item.name}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 5,
                  }}
                >
                  <Typography sx={{ color: "orange" }}>
                    {item.price}₴
                  </Typography>
                  <Typography>Quantity: {item.quantity}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                  <Stack direction='row' alignItems='center' spacing={1}>
                    {item.quantity === "0" ? (
                      <RemoveShoppingCartIcon sx={{ color: "red" }} />
                    ) : (
                      <ShoppingCartIcon sx={{ color: "green" }} />
                    )}
                    <Typography
                      variant='h6'
                      sx={{ color: item.quantity === "0" ? "red" : "green" }}
                    >
                      {item.quantity === "0"
                        ? "Product is not available"
                        : "Ready for departure"}
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Preview;
