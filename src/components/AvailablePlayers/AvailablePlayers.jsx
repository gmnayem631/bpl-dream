import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise }) => {
  const players = use(playersPromise);
  console.log(players);
  return (
    <div className="max-w-7xl mx-auto">
      <PlayerCard></PlayerCard>
    </div>
  );
};

export default AvailablePlayers;
