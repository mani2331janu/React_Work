import React, { useEffect, useState } from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  let [updateProduct, setUpdateProduct] = useState(null);

  let { id } = useParams();
  let navigate = useNavigate()
  
  useEffect(() => {
    axios.get(`http://localhost:4000/product/${id}`)
      .then((res) => setUpdateProduct(res.data));
  }, []);

  let handleChange = (e) => {
    let { value, name } = e.target;

    let fieldName = name.split("rating.")[1];

    if (name.includes("rating.")) {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setUpdateProduct({
        ...updateProduct,
        [name]: value,
      });
    }
  };

  let handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "appilication/json",
      },
      body: JSON.stringify(updateProduct),
    }).then(() => {
      alert("Data Update Sucessufully");
      navigate("/product/list")
    });
  };

  if (updateProduct !== null) {
    return (
      <div>
        <Paper elevation={20} style={paperStyle}>
          <Typography variant="h5" textAlign="center">
            Update Produnct
          </Typography>
          <Grid
            component="form"
            style={{ display: "grid", gap: "20px" }}
            onSubmit={handleUpdate}
          >
            <TextField
              value={updateProduct.title}
              name="title"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              value={updateProduct.category}
              name="category"
              id="outlined-basic"
              label="Category"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              value={updateProduct.price}
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
                  value={updateProduct.rating.rate}
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
                  value={updateProduct.rating.count}
                  name="rating.count"
                  type="number"
                  id="outlined-basic"
                  label="Count"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="success">
              Save
            </Button>
          </Grid>
        </Paper>
      </div>
    );
  } else {
    <div>Loding...</div>;
  }
};

export default UpdateProduct;
