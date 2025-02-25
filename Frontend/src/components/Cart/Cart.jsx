import React, { useEffect, useState } from 'react';
import CartData from './CartData';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);  // To manage the loading state

  // Fetch cart data from the API
  const fetchCartdata = async () => {
    try {
      const response = await fetch('http://localhost:3000/carts');
      const data = await response.json();
      setCart(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  // Use useEffect to fetch data when the component is mounted
  useEffect(() => {
    fetchCartdata();
  }, []);

  // Calculate the subtotal price for all items in the cart
  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart); // Update cart after quantity change
  };

  // Calculate the subtotal, shipping, and total
  const subtotal = calculateSubtotal();
  const shipping = 0; // Assuming shipping is free
  const total = subtotal + shipping; // Add shipping or other charges if needed

  // If loading, display loading message
  if (loading) {
    return <div className="flex justify-center pt-20">Loading cart...</div>;
  }

  return (
    <div className="flex justify-center pb-36 pt-20">
      <div className="md:text-4xl lg:text-5xl md:w-6xl xl:w-7xl max-w-7xl flex flex-col gap-10">
        
        {/* Cart data */}
        <div className="cart-total flex flex-col gap-8">
          <div className='flex justify-between text-sm font-light px-5 py-4 border-1 border-gray-200 shadow-sm'>
            <div>Products</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
            <div>Remove</div>
          </div>
          
          <div>
            {cart.length === 0 ? (
              <div className='flex justify-center mt-20'>
                <div className='text-xl'>There is no data in the cart !!</div>
              </div>
            ) : (
              cart.map((item, index) => (
                <CartData
                  key={index}
                  fetchCartdata={fetchCartdata}
                  data={item}
                  onQuantityChange={handleQuantityChange}
                />
              ))
            )}
          </div>
        </div>

        {/* Cart-total */}
        <div className="cart-total flex justify-between gap-20">
          
          {/* Coupon section */}
          <div className='coupen flex text-xl gap-8'>
            <div>
              <input
                type="text"
                name="Coupon"
                id="coupen"
                className='outline-1 outline-black h-[45px] w-[300px] px-4 rounded-sm text-gray-500 text-base font-semibold'
                placeholder='Coupon code'
              />
            </div>
            <div>
              <button className='px-10 py-[10px] bg-secondary text-white rounded hover:bg-red-700 transition'>
                Apply Coupon
              </button>
            </div>
          </div>

          {/* Subtotal */}
          <div className="subtotal border-1 border-black p-5 w-[45%] flex flex-col gap-6">
            <div className='text-xl'>Cart Total</div>

            {/* Prices */}
            <div className='text-sm flex flex-col gap-3'>
              <div className="subtotal flex justify-between border-b border-gray-300 py-3">
                <div className="name">Subtotal:</div>
                <div className="price">${subtotal.toFixed(2)}</div>
              </div>

              <div className="shipping flex justify-between border-b border-gray-300 py-3">
                <div className="shipping-name">Shipping:</div>
                <div className="cost">Free</div>
              </div>

              <div className="total flex justify-between py-3">
                <div className="total-money">Total:</div>
                <div className="price">${total.toFixed(2)}</div>
              </div>
              
              <div className="button flex justify-center">
                <button className='px-20 py-4 bg-secondary text-white rounded hover:bg-red-700 transition'>
                  Process to checkout
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
