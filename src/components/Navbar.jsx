import React, { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { IoReceipt } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { FaHireAHelper } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { IoMdPricetags } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [showBar, setShowBar] = useState(false);
  const [deliver, setDeliver] = useState(false);
  const HandleSidebar = () => {
    setShowBar(true);
  };
  return (
    <div className="max-w-[1640px] p-3 flex justify-between items-center gap-[20px] ">
      {/* left side elements */}
      <div className="flex items-center px-2">
        <div className="cursor-pointer">
          <IoMenu size={35} onClick={HandleSidebar} />
        </div>
        {/* logo */}
        <div className="font-semibold text-2xl sm:text-3xl lg:text-4xl px-4">
          <span>Sujee's</span> <span>Kitchen</span>
        </div>
        {/* deliver_pickup */}
        <div className="hidden lg:flex items-center  bg-gray-300 rounded-xl ">
          <p
            className={
              deliver
                ? "bg-black text-white px-2 py-1 rounded-xl cursor-pointer "
                : "px-2 py-1 cursor-pointer"
            }
            onClick={() => {
              setDeliver(true);
            }}
          >
            Deliver
          </p>
          <p
            className={
              deliver
                ? "px-2 py-1 cursor-pointer"
                : "bg-black text-white px-2 py-1 rounded-xl cursor-pointer "
            }
            onClick={() => {
              setDeliver(false);
            }}
          >
            PickUp
          </p>
        </div>
      </div>
      {/* elements right  */}
      <div className="flex items-center justify-between gap-[100px]">
        {/* search */}
        <div className=" hidden lg:flex items-center bg-gray-300 rounded-xl px-2 gap-2">
          <FiSearch />
          <input
            type="text"
            placeholder="Search Here"
            className="w-[400px] bg-transparent outline-none rounded-xl py-1 "
          />
        </div>
        {/* cart */}
        <div className="flex items-center gap-3">
          {/* icon */}
          <Link to={"/"}>
            <button className="flex items-center text-white bg-black gap-2">
              Home
            </button>
          </Link>
          <Link to={"/Cart"}>
            <button className="flex items-center text-white bg-black gap-2">
              <p className="bg-orange-600 text-white  px-2 rounded-full">
                {cart.length}
              </p>
              <FaShoppingCart />
              Cart
            </button>
          </Link>
        </div>
      </div>

      {/* overlay */}
      {showBar ? (
        <div className="bg-black/80 w-full h-screen fixed left-0 top-0 durstion-[0.3s] z-10"></div>
      ) : (
        ""
      )}

      {/* sidebar */}
      <div
        className={
          showBar
            ? "w-[300px]  h-screen bg-white z-10 p-2 fixed left-0 top-0 duration-[0.5s]"
            : "w-[300px]  h-screen bg-white z-10 p-2 fixed left-[-300px] top-0 duration-[0.5s]"
        }
      >
        <div className=" right-2 absolute cursor-pointer">
          <IoCloseCircleSharp
            size={20}
            onClick={() => {
              setShowBar(false);
            }}
          />
        </div>

        <div className="text-xl lg:text-2xl p-3 ">
          <span>Sujee's</span> <span className="font-bold">Kitchen</span>
        </div>
        {/* list */}
        <div className="mt-3">
          <ul className="p-3 flex flex-col gap-6">
            <li className="flex items-center gap-2 cursor-pointer ">
              <IoReceipt />
              Orders
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <IoHeart />
              Favourite
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <GiWallet />
              Wallet
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <FaHireAHelper />
              Help
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <IoMdPricetags />
              Promotion
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <FaLocationArrow />
              Best Ones
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <GiThreeFriends />
              invite Friends
            </li>
          </ul>
        </div>
      </div>
    </div>

    //
  );
};

export default Navbar;
