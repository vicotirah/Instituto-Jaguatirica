import { useRef } from "react";
//import { FaBars, FaTimes } from "react-icons/fa";
import "./Menu.css"
export default function Menu() {
    const logo="https://github.com/vicotirah/Instituto-Jaguatirica/blob/main/Front/vite-project/src/components/pages/logoIJ.png?raw=true";
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
					aaaa
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				nnnn
			</button>
		</header>
    );
}
