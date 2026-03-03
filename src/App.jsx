import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Loader from "./components/Loader/Loader";

const playersPromise = fetch("./players.json").then((response) =>
  response.json(),
);

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<Loader></Loader>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
