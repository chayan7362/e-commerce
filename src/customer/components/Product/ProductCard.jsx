import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15rem] m-3 trasition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-70">{product.brand}</p>
          <p className="">{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-500 font-semibold">{product.discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;