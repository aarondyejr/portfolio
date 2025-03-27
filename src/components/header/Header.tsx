import Navbar from "@/components/navbar/Navbar.tsx";
import React, {useEffect} from "react";
import "./Header.css"
export default function Header() {
	const [hidden, setHidden] = React.useState(false);

	useEffect(() => {
		let lastScrollY = 0;
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setHidden(currentScrollY > lastScrollY);
			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => { window.removeEventListener("scroll", handleScroll); };
	}, []);

	return (
		<header id={"header"} className={`shadow-lg shadow-gray-600/40 w-full z-10 md:w-96 md:rounded-full fixed bg-background ${hidden ? '-translate-y-44' : 'translate-y-0'}`}>
			<Navbar/>
		</header>
	)
}