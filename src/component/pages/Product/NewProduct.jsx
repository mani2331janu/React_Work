import React, { useState } from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";

const NewProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  //  {
  //   "id": "1",
  //   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   "price": 109.95,
  //   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   "category": "men's clothing",
  //   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  //   "rating": {
  //     "rate": 3.9,
  //     "count": 120
  //   }
  // },

  let [newProduct, setNewProduct] = useState({
    title: "",
    price: 500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let handleChange = (e) => {

    let { value, name } = e.target

    let fieldName = name.split("rating.")[1]
    console.log(fieldName);


    if (name.includes("rating.")) {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [fieldName]: value
        }
      })

    } else {

      setNewProduct({
        ...newProduct,
        [name]: value
      })
    }


  };

  console.log(newProduct);


  let handleAdd = (e) => {
    e.preventDefault()
    fetch("http://localhost:4000/product", {
      method: "POST",
      headers: {
        "Content-type": "appilication/json"
      },
      body: JSON.stringify(newProduct)
    })
      .then(() => {
        alert("Data Added Sucessufully")
        setNewProduct({
          title: "",
          price: 500,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
          rating: {
            rate: 0,
            count: 0,
          },
        })
      })
  }

  return (
    <div>
      <Paper elevation={20} style={paperStyle}>
        <Typography variant="h5" textAlign="center">
          Create New Produnct
        </Typography>
        <Grid component="form" style={{ display: "grid", gap: "20px" }} onSubmit={handleAdd}>
          <TextField
            value={newProduct.title}
            name="title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            value={newProduct.category}
            name="category"
            id="outlined-basic"
            label="Category"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            value={newProduct.price}
            name="price"
            id="outlined-basic"
            label="Price"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                value={newProduct.rating.rate}
                name="rating.rate"
                type="number"
                id="outlined-basic"
                label="Rate"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                value={newProduct.rating.count}
                name="rating.count"
                type="number"
                id="outlined-basic"
                label="Count"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained">Contained</Button>
        </Grid>
      </Paper>
    </div>
  );
};

export default NewProduct;
