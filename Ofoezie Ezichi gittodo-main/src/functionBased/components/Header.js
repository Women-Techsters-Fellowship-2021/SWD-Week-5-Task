import React from "react"

const Header = () => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  //some inline css above and below
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "6rem", fontWeight: "600", marginBottom: "2rem", lineHeight: "1em", color: "#ececec", textTransform: "Uppercase", textAlign: "center" }}>Daily Goals</h1>
    </header>
  )
}

export default Header 