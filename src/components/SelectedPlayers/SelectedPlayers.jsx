import React from "react";
import SelectedPlayerDetail from "../SelectedPlayerDetail/SelectedPlayerDetail";

const SelectedPlayers = ({ purchasedPlayers }) => {
  // console.log(purchasedPlayers);
  return (
    <div className="max-w-7xl mx-auto my-10">
      {/* cards */}
      <div className="grid grid-cols-1 gap-3">
        {purchasedPlayers.map((singlePlayer, idx) => {
          return (
            <SelectedPlayerDetail
              key={idx}
              singlePlayer={singlePlayer}
            ></SelectedPlayerDetail>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedPlayers;
