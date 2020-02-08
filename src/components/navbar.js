import React, { useState } from "react"
import { Link } from "gatsby"
import Styles from "../styles/navbar.module.css"

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div
            className={Styles.logo}
            style={isOpen ? { opacity: 0 } : { opacity: 1 }}
          >
            <Link to="/">IRRELLIA</Link>
          </div>
          <div className={Styles.hamburger}>
            <input type="checkbox" onClick={() => setOpen(!isOpen)} />
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={Styles.overlay}
          style={
            isOpen
              ? { display: "block", opacity: 1 }
              : { visibility: "none", pointerEvents: "none", opacity: 0 }
          }
        >
          <div className={Styles.items}>
            <span className={Styles.item}>
              <Link to="/" tabIndex="-1">
                HOME
              </Link>
            </span>
            <span className={Styles.item}>
              <Link to="/archives" tabIndex="-1">
                ARCHIVES
              </Link>
            </span>
            <span className={Styles.item}>
              <Link to="/about" tabIndex="-1">
                ABOUT
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
