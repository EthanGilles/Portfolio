import logo from "../assets/ethanGillesLogo.png";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const NavBar = () => {
  return ( 
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"> 
        <img className="mx-2 w-12" src={logo} alt="logo"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a target="_blank" href="https://www.linkedin.com/in/ethan-gilles-20950b298/"> <FaLinkedin /> </a>
        <a target="_blank" href="https://github.com/EthanGilles"> <FaGithub /> </a>
        <a target="_blank" href="https://www.instagram.com/gilles.ethan/"> <FaInstagram /> </a>
      </div>
    </nav>
  );
};

export default NavBar;
