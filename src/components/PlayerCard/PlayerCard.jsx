import React from "react";
import userImg from "../../assets/user-1.png";
import flagImg from "../../assets/report-1.png";

const PlayerCard = ({ player }) => {
  //   console.log(player);
  const {
    playerImage,
    playerName,
    playerCountry,
    playingRole,
    battingStyle,
    bowlingStyle,
    price,
  } = player;
  return (
    <div className="card shadow-sm p-4 bg-gray-100">
      <figure>
        <img className="h-56 rounded-lg" src={playerImage} alt="Shoes" />
      </figure>
      <div className="">
        <div className="flex my-4">
          <img src={userImg} alt="" />
          <h2 className="card-title ml-3 text-[#131313]">{playerName}</h2>
        </div>
        <div className="flex justify-between border-b-2 pb-2 border-gray-300">
          <div className="flex items-center">
            <img className="h-5 w-5" src={flagImg} alt="" />
            <span className="ml-2">{playerCountry}</span>
          </div>
          <button className="btn">{playingRole}</button>
        </div>
        <div className="flex justify-between font-bold mt-3">
          <span>Rating</span>
          <span>5</span>
        </div>

        <div className="flex justify-between mt-3">
          <span className="font-bold">{battingStyle}</span>
          <span>{bowlingStyle}</span>
        </div>
        <div className="card-actions items-center justify-between mt-4">
          <p className="font-bold">Price: {price}</p>
          <button className="btn">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
