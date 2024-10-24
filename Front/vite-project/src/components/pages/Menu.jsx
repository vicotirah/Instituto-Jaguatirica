import { useRef } from "react";
//import { FaBars, FaTimes } from "react-icons/fa";
import "./Menu.css"
export default function Menu() {
    const logo="https://github.com/vicotirah/Instituto-Jaguatirica/blob/main/Front/vite-project/src/components/pages/logoIJ.png?raw=true";
    const hamburguer = "https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg";
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={logo} alt="logo do instituto"/>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Sobre nós</a>
				<a href="/#">Voluntariado</a>
				<a href="/#">Apadrinhamento</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					X
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<img src={hamburguer}/>
			</button>
		</header>
    );
}
