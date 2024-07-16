import React, { useEffect } from "react";
import HeadlineCard from "./HeadlineCard";
import Footer from "./Footer";
import Menu from "./Menu";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const { text } = useTypewriter({
    words: ["Delicious", "tasty"],
    loop: {},
  });
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4">
        <div
          className="max-h-[550px] sm:max-h-[650px]  lg:max-h-[450px]  bg-gray-400 relative  overflow-hidden"
          data-aos="fade-up"
        >
          {/* overlay */}
          <div className="h-full w-full bg-black/40 absolute flex flex-col justify-center p-10">
            <h1 className="text-white text-4xl sm:text-6xl font-bold mb-5 ">
              The <span className="text-red-500">Best</span>
            </h1>
            <h1 className="text-white text-4xl sm:text-6xl font-bold  ">
              <span className="text-red-500">Foods</span> <span>{text}</span>
              <span>
                <Cursor />
              </span>
            </h1>
          </div>

          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="image"
            className="object-cover w-full max-h-[500px] "
          />
        </div>
      </div>
      <HeadlineCard />
      <Menu />
      <Footer />
    </>
  );
};

export default Header;
