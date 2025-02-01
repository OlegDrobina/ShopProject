import React from "react";
import { Box, Typography } from "@mui/material";
import rozetkaLogo from "../../img/rozetkaLogo.png";
const LogoImageWithText = (props) => {
  const { color, paddingLeft, paddingTop, paddingBottom } = props;
  return (
    <Box
      display='flex'
      alignItems='center'
      gap={1}
      p={2}
      sx={{
        paddingLeft: { paddingLeft },
        paddingTop: { paddingTop },
        paddingBottom: { paddingBottom },
      }}
    >
      <img src={rozetkaLogo} style={{ width: "50px", height: "40px" }} />
      <Typography variant='h4' sx={{ fontWeight: "bold", color: { color } }}>
        ROZETKA
      </Typography>
    </Box>
  );
};

export default LogoImageWithText;
