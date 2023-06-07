import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material";
import axios from "axios";

const ViewProduct = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const data = res.data;
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setIsLoading(false);
      });
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((value) => value.category === selectedCategory);

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", padding: "2rem 3rem 3rem 3rem", overflow: isLoading ? "hidden" : "auto", }}>
      <Typography
        variant="h1"
        component="h1"
        alignContent="center"
        fontFamily="Mukta"
        sx={{
          fontSize: "30px",
          paddingBottom: "3rem",
          fontWeight: "bold",
          color: "#513F65",
        }}
      >
        Discover The Latest Trends in Shopping
      </Typography>

      <FormControl fullWidth sx={{ paddingBottom: "3rem" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          FILTER
        </InputLabel>
        <NativeSelect
          value={selectedCategory}
          inputProps={{
            name: "category",
            id: "uncontrolled-native",
          }}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </NativeSelect>
      </FormControl>

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {filteredData.length > 0 ? (
            filteredData.map((value) => (
                <Card
                sx={{ padding: "4rem 1rem 4em 1rem" }}
                key={value.id}
                style={{ width: "100%" }}
              >
                <CardMedia
                  sx={{
                    height: 0,
                    paddingTop: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  image={value.image}
                  title={value.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontFamily="Ubuntu"
                    paddingBottom="1rem"
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    paddingBottom="0.5rem"
                  >
                    Price: ${value.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
  
                  {value.rating && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "1rem",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ marginRight: "0.5rem", fontWeight: "bold" }}
                      >
                        Rating:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.rating.rate} ({value.rating.count} reviews)
                      </Typography>
                    </Box>
                  )}
                  <CardActions>
                    <Button
                      size="large"
                      fullWidth
                      sx={{
                        padding: "1rem",
                        backgroundColor: "#9860A8",
                        color: "#FFF",
                        "&:hover": {
                          backgroundColor: "#401060",
                        },
                      }}
                    >
                      Buy Now
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body1">No products found.</Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ViewProduct;
