import React, { useEffect, useState } from 'react';
import CartData from './CartData';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const fetchCartdata = async () => {
    try {
      const response = await fetch('http://localhost:3000/carts');
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchCartdata();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="md:text-4xl lg:text-5xl md:w-6xl xl:w-7xl max-w-7xl">
        <div>
          {cart.length === 0 ? (
            <div>Please login to see your cart.</div>
          ) : (
            cart.map((item) => (
              <CartData key={item.id} fetchCartdata={fetchCartdata} data={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
