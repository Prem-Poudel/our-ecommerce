import React from 'react';

const CartData = (props) => {
  const removeFromCart = async () => {
    try {
      const response = await fetch(`http://localhost:3000/carts/${props.data.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        props.fetchCartdata(); // Refresh the cart after successful deletion
      } else {
        console.error("Failed to remove item from cart");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div>
        <img src={props.data.thumbnail} alt="Product" className="w-[100px] h-[100px] object-cover" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-lg font-semibold">{props.data.title}</div>
        <div className="text-gray-600">${props.data.price}</div>
        <div className="text-gray-500 text-sm">{props.data.category}</div>
      </div>

      <div>
        <button
          onClick={removeFromCart}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartData;
