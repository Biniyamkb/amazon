import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import axios from "axios";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { productUrl } from "../../APi/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [detailProduct, setdetailProduct] = useState({});

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}${productId}`)

      .then((res) => {
        console.log(res.data);
        setdetailProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        isLoading(false);
      });
  }, []);

  return (
    <LayOut>
      {Object.keys(detailProduct).length > 0 ? ( // Check if detailProduct has data
        <ProductCard product={detailProduct} flex={true} renderDesc={true} />
      ) : (
        <Loader /> // Fallback content while loading
      )}
    </LayOut>
  );
}

export default ProductDetail;
