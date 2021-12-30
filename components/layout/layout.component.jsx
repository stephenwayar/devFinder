import React from "react";
import HtmlHead from "../html/htmlHead.component";

const Layout = ({children}) => {
  return(
    <div>
      <HtmlHead />
      {children}
    </div>
  )
}
export default Layout