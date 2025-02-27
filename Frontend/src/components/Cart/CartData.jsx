import React, { useState } from 'react';

const CartData = (props) => {
  const [quantity, setQuantity] = useState(props.data.quantity || 1);

  const updateQuantity = async (newQuantity) => {
    if (newQuantity < 1) return;

    const updatedData = {
      ...props.data, 
      quantity: newQuantity, 
    };

    try {
      const response = await fetch(`http://localhost:3000/carts/${props.data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        setQuantity(newQuantity);
        props.fetchCartdata();
      } else {
        console.error("Failed to update quantity");
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeFromCart = async () => {
    try {
      const response = await fetch(`http://localhost:3000/carts/${props.data.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        props.fetchCartdata();
      } else {
        console.error("Failed to remove item from cart");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <div className="flex items-center justify-between border-1 border-gray-200 px-5 py-4 shadow-sm mt-3">
      <div>
        <img src={props.data.thumbnail} alt="Product" className="w-[50px] h-[50px] object-cover" />
      </div>

      {/* Price */}
      <div className="text-sm">
        ${props.data.price}
      </div>

      {/* Quantity Control */}
      <div className='flex items-center gap-2'>
        <button className="text-xl bg-gray-200 px-5" onClick={() => updateQuantity(quantity - 1)}>-</button>
        <span className='text-lg'>{quantity}</span>
        <button className="text-xl bg-gray-200 px-5" onClick={() => updateQuantity(quantity + 1)}>+</button>
      </div>

      {/* Subtotal */}
      <div className='text-sm'>
        ${props.data.price * quantity}
      </div>

      {/* Remove Button */}
      <div className='text-sm'>
        <button className="text-red-500" onClick={removeFromCart}>Remove</button>
      </div>
    </div>
  );
};

export default CartData;
