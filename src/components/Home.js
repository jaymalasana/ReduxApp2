import React from "react";
import Image1 from "../Images/iPhone-15-Pro-Max.webp";
import Image2 from "../Images/pexels-webber-amir-1551084-20348035.jpg";
import Image3 from "../Images/pexels-silvie-63690.jpg";
import Cart from "../Images/cart.jpg";

const Home = () => {
  return (
    <>
      <img
        src={Cart}
        alt="cart"
        className="h-12 mr-6 float-end cursor-pointer"
      />
      <h1 className="text-center mt-5 mb-5 text-5xl font-extrabold">Shop</h1>
      <div className="flex justify-center gap-20">
        <div className="flex border-2 border-gray-400 w-[500px] ">
          <div>
            <img src={Image1} alt="phone" className="h-40" />
          </div>
          <div className="flex flex-col mt-7 ml-7 text-xl font-bold">
            <span>iPhone 14</span>
            <br />
            <span>Price : 1000$</span>
          </div>
          <div className="mt-14 ml-7 bg-red-500 h-9 w-36 text-center border-2 border-black shadow-2xl text-xl font-medium">
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="flex border-2 border-gray-400 w-[500px] ">
          <div>
            <img src={Image2} alt="phone" className="h-40 w-40" />
          </div>
          <div className="flex flex-col mt-7 ml-7 text-xl font-bold">
            <span>Samsung</span>
            <br />
            <span>Price : 800$</span>
          </div>
          <div className="mt-14 ml-7 bg-red-500 h-9 w-36 text-center border-2 border-black shadow-2xl text-xl font-medium">
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="flex border-2 border-gray-400 w-[500px] ">
          <div>
            <img src={Image3} alt="phone" className="h-40 w-40" />
          </div>
          <div className="flex flex-col mt-7 ml-7 text-xl font-bold">
            <span>One Plus</span>
            <br />
            <span>Price : 700$</span>
          </div>
          <div className="mt-14 ml-7 bg-red-500 h-9 w-36 text-center border-2 border-black shadow-2xl text-xl font-medium">
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
