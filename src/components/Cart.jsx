import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    setPrice(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);
  const RemoveCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <>
      <div
        className=" mt-10 mx-auto w-[500px] bg-gray-200 p-3 rounded-lg "
        data-aos=""
      >
        <h1 className="text-3xl font-bold border-b-2 border-solid border-black">
          Cart
        </h1>
        {cart.map((item) => (
          <div className="flex items-center mt-5 gap-5 relative " key={item.id}>
            <div className="w-[200px] max-h-[200px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={item.image}
                alt="image"
                className="object-cover w-full h-[100px]"
              />
            </div>

            <div>
              <h1 className="font-bold text-xl">{item.name}</h1>
              <p className="text-sm text-gray-600">Price Rs: {item.price}</p>
            </div>
            <button
              className="absolute right-0 bg-gray-400 bottom-0 hover:bg-orange-600 hover:text-white border-none "
              onClick={() => RemoveCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
        <div className="mt-6">
          <p className="font-bold text-xl">Total Price Rs : {price}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
