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

  const a = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
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
        <ProductCard product={detailProduct} />
      ) : (
        <Loader /> // Fallback content while loading
      )}
    </LayOut>
  );
}

export default ProductDetail;
