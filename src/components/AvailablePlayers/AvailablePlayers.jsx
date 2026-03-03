import React, { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  const players = use(playersPromise);
  console.log(players);
  return <div>Available Players</div>;
};

export default AvailablePlayers;
