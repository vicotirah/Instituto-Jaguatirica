import { useRef } from "react";
//import { FaBars, FaTimes } from "react-icons/fa";
import "./Menu.css"
export default function Menu() {
    const logo="";
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
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
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
