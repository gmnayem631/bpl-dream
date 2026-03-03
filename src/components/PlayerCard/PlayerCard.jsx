import React from "react";
import userImg from "../../assets/user-1.png";
import flagImg from "../../assets/report-1.png";

const PlayerCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-4">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="">
        <div className="flex my-4">
          <img src={userImg} alt="" />
          <h2 className="card-title ml-3 text-[#131313]">Virat Kohli</h2>
        </div>
        <div className="flex justify-between border-b-2 pb-2 border-gray-300">
          <div className="flex items-center">
            <img className="h-5 w-5" src={flagImg} alt="" />
            <span className="ml-2">India</span>
          </div>
          <button className="btn">Batsman</button>
        </div>
        <div className="flex justify-between font-bold mt-3">
          <span>Rating</span>
          <span>5</span>
        </div>

        <div className="flex justify-between mt-3">
          <span className="font-bold">Right Hand Bat</span>
          <span>Right Hand Bowl</span>
        </div>
        <div className="card-actions items-center justify-between mt-4">
          <p className="font-bold">Price: $1500000</p>
          <button className="btn">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
