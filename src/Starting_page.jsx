import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StartingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/View_product");
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", padding: "2rem 3rem 3rem 3rem" }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: "bold",
          fontSize: "36px",
          marginBottom: "2rem",
          color: "#401060",
        }}
      >
        Welcome to Our Store
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{
          fontSize: "18px",
          lineHeight: "1.5",
          color: "#555555",
          marginBottom: "3rem",
        }}
      >
        Explore our diverse collection of high-quality products and discover the perfect items that match your style and needs. From trendy fashion apparel to cutting-edge electronics and exquisite jewelry, our store offers a wide range of options to cater to every taste. Get inspired, shop with confidence, and find the perfect items that will enhance your lifestyle.
      </Typography>
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#B2A9EC",
          color: "#FFFFFF",
          fontWeight: "bold",
          fontSize: "18px",
          padding: "1rem",
          "&:hover": {
            backgroundColor: "#401060",
          },
        }}
        onClick={handleClick}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default StartingPage;
