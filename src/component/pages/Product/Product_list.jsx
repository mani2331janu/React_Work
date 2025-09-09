import React from "react";
import useFetch from "../../custom-hooks/fetch";
import { Button } from "@mui/material";
import { FaShoppingCart, FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Product_list = () => {
  let navigate = useNavigate();
  const { product, error, loading, setProduct } = useFetch(
    "http://localhost:4000/product"
  );

 
  let handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:4000/product/${id}`).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });

          // ✅ Update UI
          let newProductList = product.filter((p) => p.id !== id);
          setProduct(newProductList);
        });
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Product List</h2>
      <article>
        <span>Create New Product</span>
        <Button onClick={()=>{navigate("/product/add")}}>Click Me</Button>
      </article>
      {error && <p className="text-red-500 font-medium mb-4">Error: {error}</p>}

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow h-60 flex flex-col"
            >
              <div className="flex-1 overflow-y-auto mb-2">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.category}</p>
              </div>

              <p className="font-bold mt-auto">Price: ${p.price}</p>
              <p className="font-bold mt-auto">Rating: {p.rating.rate}</p>
              <p className="font-bold mt-auto">Count: {p.rating.count}</p>

              <div className="flex gap-2 mt-2">
                <Button variant="contained" color="primary">
                  <FaShoppingCart />
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate(`/product/update/${p.id}`)}
                >
                  <FaEdit />
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(p.id)}
                >
                  <MdDeleteOutline />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product_list;
