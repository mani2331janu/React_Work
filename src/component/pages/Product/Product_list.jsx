import React from "react";
import useFetch from "../../custom-hooks/fetch";

const Product_list = () => {
  const { product, error, loading } = useFetch("http://localhost:4000/product");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Product List</h2>

      {error && (
        <p className="text-red-500 font-medium mb-4">Error: {error}</p>
      )}

      {
        loading ?
          (
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
                    <p className="text-gray-600">{p.description}</p>
                  </div>
                  <p className="font-bold mt-auto">Price: ${p.price}</p>
                  <p className="font-bold mt-auto">Price: ${p.rating.rate}</p>
                  <p className="font-bold mt-auto">Price: ${p.rating.count}</p>
                  

                </div>
              ))}
            </div>
          )
      }
    </div>
  );
};

export default Product_list;
