import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <>
      <div className="max-w-[1640px] p-4 bottom-0 bg-black flex justify-center items-center text-center">
        <div className="text-gray-500 ">
          <h1 className="text-2xl font-bold">Sujee's Kitchen</h1>
          <p className="text-sm">Tel:0763127299</p>
          <p className="text-sm">Email:lsujee2000@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
