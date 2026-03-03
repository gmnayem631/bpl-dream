import React from "react";
import deleteImg from "../../assets/delete.png";
const SelectedPlayerDetail = ({ singlePlayer }) => {
  const { playerImage, playerName, playingRole } = singlePlayer;
  return (
    <div className="flex justify-between items-center border border-gray-400 p-3 rounded-xl">
      <div className="flex items-center gap-4">
        <img className="h-20 rounded-xl" src={playerImage} alt="" />
        <div className="flex flex-col gap-1">
          <p className="text-xl font-bold">{playerName}</p>
          <p className="text-[#131313]">{playingRole}</p>
        </div>
      </div>
      <div className="cursor-pointer">
        <img src={deleteImg} alt="" />
      </div>
    </div>
  );
};

export default SelectedPlayerDetail;
