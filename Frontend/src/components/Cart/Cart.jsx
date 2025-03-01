import React, { useEffect, useState } from 'react';
import CartData from './CartData';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCartdata = async () => {
    try {
      const response = await fetch('http://localhost:3000/carts');
      const data = await response.json();

      // Ensure that each item has a default quantity of 1 if it's not set
      const updatedData = data.map(item => ({
        ...item,
        quantity: item.quantity || 1
      }));

      setCart(updatedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // SEO - Update title and meta description dynamically
    document.title = "Your Shopping Cart - Review Items and Checkout";

    // Meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Review your cart before proceeding to checkout. Adjust quantities, apply coupons, and finalize your purchase.";
    } else {
      const metaTag = document.createElement('meta');
      metaTag.name = "description";
      metaTag.content = "Review your cart before proceeding to checkout. Adjust quantities, apply coupons, and finalize your purchase.";
      document.head.appendChild(metaTag);
    }

    // Open Graph tags for social sharing
    let ogTitle = document.querySelector("meta[property='og:title']");
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", "Your Shopping Cart - Review Items and Checkout");

    let ogDescription = document.querySelector("meta[property='og:description']");
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", "Review your cart before proceeding to checkout. Adjust quantities, apply coupons, and finalize your purchase.");

    let ogImage = document.querySelector("meta[property='og:image']");
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute("content", "https://yourwebsite.com/cart-image.jpg"); // Replace with your actual image URL

    // Structured Data (JSON-LD) for ShoppingCart
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ShoppingCart",
      "name": "Shopping Cart",
      "url": "https://yourwebsite.com/cart",
      "cartItems": cart.map(item => ({
        "@type": "Product",
        "name": item.name,
        "sku": item.id,
        "price": item.price,
        "quantity": item.quantity
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Fetch cart data
    fetchCartdata();
  }, [cart]);

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) newQuantity = 1; // Prevent quantity from going below 1

    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const subtotal = calculateSubtotal();
  const shipping = 0;
  const total = subtotal + shipping;

  if (loading) {
    return <div className="flex justify-center pt-20">Loading cart...</div>;
  }

  return (
    <div className="flex justify-center pb-36 pt-10">
      <div className="md:text-4xl lg:text-5xl md:w-6xl xl:w-7xl max-w-7xl flex flex-col gap-10">

      <nav aria-label="breadcrumb" className='w-[100px]'>
          <ol className="flex text-gray-500 text-sm">
            <li className="mr-2">
              <a href="/" className="hover:underline">Home</a> /
            </li>
            <li>Cart</li>
          </ol>
        </nav>
        
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
              <div className='flex justify-center'>
                <div className='text-xl'>There are no items in your cart.</div>
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
                aria-label="Enter your coupon code"
              />
            </div>
            <div>
              <button className='px-10 py-[10px] bg-secondary text-white rounded hover:bg-red-700 transition' aria-label="Apply Coupon">
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
                <button className='px-20 py-4 bg-secondary text-white rounded hover:bg-red-700 transition' aria-label="Proceed to checkout">
                  Proceed to Checkout
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
