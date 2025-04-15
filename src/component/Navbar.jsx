import logo from "../assets/logo.svg"

export default function Navbar() {
    return (
      <>
        <div className="navbar">
          <a href="#">
            <img className='logo-img' src={logo} alt="logo" />
          </a>
          <ul>
            <li><a href="https://www.w3schools.com">ABOUT</a></li>
            <li><a href="">WORK</a></li>
            <li><a href="">CONTACT</a></li>
          </ul>
        </div>    
      </>
    )
  }