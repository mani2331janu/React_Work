import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchApi = async () => {
      try {
       

        let res = await axios.get(url);
        setProduct(res.data)
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, [url]); 

  return { product, error, loading,setProduct };
}

export default useFetch;
