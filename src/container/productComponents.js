import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="text-center shadow-lg px-1 py-4 rounded-xl my-10 mx-5 bg-white flex flex-col">
  <Link to={`/product/${id}`} className="flex flex-col h-full">
    <div className=" flex-grow flex items-center justify-center">
      <img src={image} alt={title} className="max-w-60 max-h-60 " />
    </div>
    <div className=" p-4 flex flex-col justify-end">
      <div className="text-xl font-serif">{title}</div>
      <div className="text-teal-500">$ {price}</div>
      <div className="font-serif">{category}</div>
    </div>
  </Link>
</div>

    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;