import React, { useState, useEffect, useContext } from "react";
import { data } from "../data/data.js";
import { IoHeart } from "react-icons/io5";
import { MdPriceChange } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { CartContext } from "../App.jsx";

const Menu = () => {
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [items, setItems] = useState(data);

  const RemoveCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //filter products
  const filter = (cattegory) => {
    setItems(data.filter((item) => item.cattegory == cattegory));
  };
  //filter price
  const filerPrice = (price) => {
    const filtered = data.filter((item) => item.price < price);
    setItems(filtered);
  };
  const addCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="max-w-[1640px] p-4">
      <h1 className="font-bold text-4xl text-center "> Menu Items</h1>
      <div className="flex justify-between items-center mt-6 ">
        {/* left */}
        <div className="my-2">
          <h1 className="text-lg ">Filter Type</h1>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => {
                setItems(data);
              }}
            >
              All
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => {
                filter("burger");
              }}
            >
              Burger
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => {
                filter("pasta");
              }}
            >
              Pasta
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => {
                filter("salad");
              }}
            >
              Salad
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => {
                filter("ice-cream");
              }}
            >
              ice cream
            </button>
          </div>
        </div>
        {/* right */}
        <div className="my-2">
          <h1 className="text-lg">Price List</h1>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => {
                filerPrice(100);
              }}
            >
              less 100
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => {
                filerPrice(200);
              }}
            >
              less 200
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => {
                filerPrice(300);
              }}
            >
              less 300
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => {
                filerPrice(400);
              }}
            >
              less 400
            </button>
          </div>
        </div>
      </div>
      {/* items */}
      <div className="mt-5 grid grid-cols-2  lg:grid-cols-4 gap-6 ">
        {/* card */}
        {items.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl h-[250px]  shadow-lg cursor-pointer relative "
            data-aos="fade-up"
          >
            <img
              src={item.image}
              className=" lg:max-h-[200px] w-full object-cover block "
              alt="image"
            />
            <div className="flex justify-between mt-2 ">
              <p className="font-bold ml-2">{item.name}</p>
              <div className="flex items-center gap-2">
                <p className="bg-gray-300 rounded-full p-1">
                  <IoHeart size={20} />
                </p>
                <p className="bg-orange-600 rounded-full mr-2 p-1 text-xs text-white flex items-center gap-1">
                  <MdPriceChange />
                  Rs:{item.price}
                </p>
              </div>
            </div>
            <div className="hover:opacity-[1] bg-black/40 absolute bottom-0 opacity-0 left-0 h-full  w-full z-0 flex justify-center items-center ">
              {cart.includes(item) ? (
                <button
                  className="absolute z-10 bg-green-900 text-white border-none flex gap-2 items-center "
                  onClick={() => {
                    RemoveCart(item.id);
                  }}
                >
                  Remove
                  <FaCartShopping />
                </button>
              ) : (
                <button
                  className="absolute z-10 bg-orange-600 text-white border-none flex gap-2 items-center "
                  onClick={() => {
                    addCart(item);
                  }}
                >
                  <FaCartShopping />
                  add cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
