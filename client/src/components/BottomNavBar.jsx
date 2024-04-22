import { Link } from "react-router-dom";

export default function BottomTabBar() {
    return (
      <div className="fixed bottom-0 w-full bg-black text-white flex justify-around py-3">
        <Link to="/" >
          Home
        </Link>
        <Link to="/stats" >
          Stats
        </Link>
        <Link to="/play" >
          Play
        </Link>
        <Link to="/pools" >
          Pools
        </Link>
        <Link to="/account" >
          Account
        </Link>
      </div>
    );
  }