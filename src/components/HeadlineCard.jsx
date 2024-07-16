import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeadlineCard = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="max-w-[1640px] p-4 mx-auto grid md:grid-cols-3 gap-8  ">
      {/* card */}
      <div className=" relative overflow-hidden  rounded-xl" data-aos="fade-up">
        <div className="w-full h-full absolute bg-black/40">
          <h1 className="text-white font-bold text-2xl mx-3 mt-3">
            Suns Out Bogo's Out
          </h1>
          <p className="text-gray-400 mx-3">promotions</p>
          <button className="bottom-3 left-2 absolute bg-white border-none hover:scale-[1.1] hover:bg-orange-600 hover:text-white transition ease-linear duration-[0.1s] ">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="image"
          className="object-cover"
        />
      </div>
      <div
        className=" relative overflow-hidden   rounded-xl"
        data-aos="fade-up"
      >
        <div className="w-full h-full absolute bg-black/40">
          <h1 className="text-white font-bold text-2xl mx-3 mt-3">
            New Food Items
          </h1>
          <p className="text-gray-400 mx-3">Try the new tasty Recipes</p>
          <button className="bottom-3 left-2 absolute bg-white border-none hover:scale-[1.1] hover:bg-orange-600 hover:text-white transition ease-linear duration-[0.1s] ">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/699544/pexels-photo-699544.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="image"
          className="object-cover h-full"
        />
      </div>
      <div className=" relative overflow-hidden rounded-xl" data-aos="fade-up">
        <div className="w-full h-full absolute bg-black/40">
          <h1 className="text-white font-bold text-2xl mx-3 mt-3">Deserts</h1>
          <p className="text-gray-400 mx-3">Taste our Delicious Deserts </p>
          <button className="bottom-3 left-2 absolute bg-white border-none hover:scale-[1.1] hover:bg-orange-600 hover:text-white transition ease-linear duration-[0.1s] ">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="image"
        />
      </div>
    </div>
  );
};

export default HeadlineCard;
