import logo from "../assets/LogoWhite.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-row bg-[#0B0A09] p-6 sm:p-5">
      <div className="justify-left items-left flex flex-1 pl-5 sm:justify-start">
        <Link to="/">
          <img className="m-0 h-[55px] sm:h-20" src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
}
