
export default function Header() {
  return (
    
    <div className="flex p-6 sm:p-6 flex-row  bg-[#0B0A09]">
    <div className="flex-1 flex justify-left items-left pl-5">
      <img className="h-20" src="../src/assets/LogoWhite.png" alt="" />
      <h1 className="text-white hidden font-bold text">TU SOLUCIÓN EN <br /> MAQUINARIA</h1>
    </div>
    <div className="flex-1 w-30 flex justify-left items-left">
      <h1 className="text-white text-2xl"></h1>
    </div>
    <div className="flex-1  flex justify-center items-center">
      <h1 className="text-white hidden text">LOGOTIPO</h1>
    </div>
  </div>
    
  )
}
