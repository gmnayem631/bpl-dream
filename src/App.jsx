import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Loader from "./components/Loader/Loader";
import Hero from "./components/Hero/Hero";

const playersPromise = fetch("./players.json").then((response) =>
  response.json(),
);

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(
      (ply) => ply.playerName !== p.playerName,
    );

    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + p.price);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      {/* <Hero></Hero> */}

      <div className="max-w-7xl mx-auto flex justify-between items-center mt-10">
        <h2 className="text-2xl font-bold">
          {toggle
            ? "Available Players"
            : `Selected Players (${purchasedPlayers.length}/6)`}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handleToggle}
            className={`font-bold btn py-3 px-4 rounded-l-2xl border-r-0 ${toggle ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={handleToggle}
            className={`btn py-3 font-bold px-4 rounded-r-2xl border-l-0 ${toggle ? "" : "bg-[#E7FE29]"}`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense fallback={<Loader></Loader>}>
          <AvailablePlayers
            playersPromise={playersPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}

      <ToastContainer />
    </>
  );
}

export default App;
