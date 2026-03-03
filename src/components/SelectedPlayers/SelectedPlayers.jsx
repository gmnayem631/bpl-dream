import React from "react";

const SelectedPlayers = ({ purchasedPlayers }) => {
  // console.log(purchasedPlayers);
  return (
    <div className="max-w-7xl mx-auto my-10">
      Selected Players
      {purchasedPlayers.map((singlePlayer, idx) => {
        return <p key={idx}>Hello</p>;
      })}
    </div>
  );
};

export default SelectedPlayers;
