import "./App.css";
import logo from "./assets/logo.png";
import dollarImg from "./assets/currency.png";

function App() {
  return (
    <>
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-15 h-15 cursor-pointer" src={logo} alt="" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span>6000000000</span>
          <span> Coin</span>
          <img src={dollarImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
