import { Suspense, useState } from "react";
import "./App.css";
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
  const [availableBalance, setAvailableBalance] = useState(100000);

  const handleToggle = () => {
    console.log("toggled");
    setToggle(!toggle);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      {/* <Hero></Hero> */}

      <div className="max-w-7xl mx-auto flex justify-between items-center text-xl font-bold mt-10">
        <h2>Available Players</h2>
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
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense fallback={<Loader></Loader>}>
          <AvailablePlayers
            playersPromise={playersPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
