import logo from  "../assets/LogoWhite.png"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="flex flex-row bg-[#0B0A09] p-6 sm:p-6">
  <div  className="flex flex-1 pl-5 justify-left sm:justify-start items-left">
    <Link to="/">
    <img className="h-[55px] sm:h-20 m-0" src={logo} alt="" />
    </Link>
  </div>
</div>
  )
}
