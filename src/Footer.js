import React from "react"


const Footer=()=>{
  const year= new Date().getFullYear();
  
    return(
    <>

  <footer>
      <p>copy rights © {year}</p>
  </footer>

    </>
    )
}

export default Footer;