import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
}) => {
  const playerData = use(playersPromise);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2 my-10 p-4 md:p-0">
        {playerData.map((player, idx) => {
          return (
            <PlayerCard
              key={idx}
              player={player}
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
            ></PlayerCard>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
