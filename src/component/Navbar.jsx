import Magnetic from "../animation/Magnetic"; // adjust path if needed
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <Magnetic radius={80} strength={0.3}>
        <a href="#">
          <img className="logo-img" src={logo} alt="logo" />
        </a>
      </Magnetic>
      <ul>
        <li>
          <Magnetic radius={28} strength={0.3}>
            <a href="https://www.w3schools.com">ABOUT</a>
          </Magnetic>
        </li>
        <li>
          <Magnetic radius={28} strength={0.3}>
            <a href="">WORK</a>
          </Magnetic>
        </li>
        <li>
          <Magnetic radius={28} strength={0.3}>
            <a href="">CONTACT</a>
          </Magnetic>
        </li>
      </ul>
    </div>
  );
}
