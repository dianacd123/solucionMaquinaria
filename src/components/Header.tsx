import logo from  "../assets/LogoWhite.png"

export default function Header() {
  return (
    <div className="flex flex-row bg-[#0B0A09] p-6 sm:p-6">
  <div  className="flex flex-1 pl-5 justify-center sm:justify-start items-center">
   <a href="">
    <img className="h-[55px] sm:h-20 m-0" src={logo} alt="" />
    </a>
  </div>
</div>
  )
}
