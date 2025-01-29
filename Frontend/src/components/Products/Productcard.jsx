import React from "react";

const Productcard = (props) => {
  const addToCart = async () => {
    try {
      const response = await fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.data),
      });

      if (response.ok) {
        toast.success("Added to cart successfully");
      } else {
        toast.error("Failed to add to cart");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-40 md:w-[280px] border border-gray-200 mt-10 relative group transition-all duration-300">
      {/* Image */}
      <div>
        <img
          src={props.data.thumbnail}
          alt={props.data.title}
          className="h-[100px] md:h-[200px] w-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col p-4 gap-2">
        <div className="font-semibold">{props.data.title}</div>
        <div className="text-gray-500 text-red-">Rs. {props.data.price}</div>
        <div className="text-sm text-gray-400">{props.data.category}</div>
      </div>

      {/* Hover Button (Initially Hidden) */}
      <div className="absolute top-40 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex">
        <button
          onClick={addToCart}
          className="bg-black text-white p-4 w-full text-center"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Productcard;
