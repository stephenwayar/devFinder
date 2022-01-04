import React from "react";
import Image from "next/image";
import light from "../../assests/images/light.png"
import dark from "../../assests/images/dark.png"

const Nav = ({toggle, click}) => {
  return(
    <div className="dark:text-gray-200 sm:px-24  lg:px-64 md:px-36 xl:px-80 2xl:mx-20 mbp:px-96 pb-6 px-5 text-gray-900">
      <div className="float-left font-mono font-bold text-2xl">
        <h1>devFinder</h1>
      </div>

      <div className="float-right pt-1 pl-2">
        <Image 
          onClick={click} 
          width="15px" 
          height="15px" 
          src={ toggle ? light : dark} 
          alt="sun logo"
        />
      </div>

      <div className="float-right font-bold pt-2 text-xs font-mono">
        <h1>{toggle ? "LIGHT" : "DARK"}</h1>
      </div>
    </div>
  )
}
export default Nav