import React, { useEffect, useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import { data } from "react-router-dom";

const Productcard = (props) => {
  const [discount, setDiscount] = useState(0);
  const [subcategories, setSubcategories] = useState([]);
  
  useEffect(() => {
    const claculateDiscount = (actualPrice, increasePrice) => {
      return Math.round(((increasePrice - actualPrice) / increasePrice) * 100);
    };

    if (props.data.sub_category) {
      setSubcategories(props.data.sub_category);
    }

    setDiscount(claculateDiscount(props.data.actual_price, props.data.increase_price));

  }, [props.data]);

  const addToCart = async () => {
    try {
      const response = await fetch('http://localhost:3000/carts', {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(props.data),
      });

      if (data) {
        toast.success("Added to cart successfully");
      } else {
        toast.error("Failed to add to cart");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="w-40 md:w-[280px] border border-gray-200 mt-10 relative group ">
      {/* Image */}
      <div>
        <img
          src={props.data.image}
          alt={props.data.title}
          className="h-[100px] md:h-[200px] w-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col p-4 gap-2">
        <div className="font-semibold">{props.data.name}</div>
        <div className="text-gray-500"><strike>Rs. {props.data.increase_price}</strike></div>
        <div className="text-red-500">Rs. {props.data.actual_price}</div>
        <div className="text-sm text-gray-400">{props.data.category.name}</div>
        <div>
        <div className="flex gap-2">
      {subcategories.map((subcategory) => (
        <div key={subcategory.id} className="text-sm text-gray-400 border w-fit px-2 rounded ">
          {subcategory.name}
        </div>
      ))}
    </div>
        </div>
        
      </div>

      {/* Hover Button (Initially Hidden) */}
      <div className="absolute top-40 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex">
        <button
          type="button"
          onClick={addToCart}
          className="bg-black text-white p-4 w-full text-center"
        >
          Add To Cart
        </button>
      </div>
      <div className="text-sm absolute top-2 right-2 text-red-500">-{discount}%</div>
    </div>
  );
};

export default Productcard;
