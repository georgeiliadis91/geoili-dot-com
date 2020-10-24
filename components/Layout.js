import Navbar from './Navbar'
import { Container } from "react-grid"
import Footer from './Footer';
import Contact from './Contact'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Fetch from 'isomorphic-unfetch';

const Layout = (props) => {
	return (
		<div>
			<Navbar />
			<div className="socials">

				<a target="_blank" href={process.env.linkedin}>
					<FaLinkedin size="2rem" />
				</a>
				<a target="_blank" href={process.env.github}>
					<FaGithub size="2rem" />
				</a>

			</div>
			<Container>
				{props.children}
				<Contact />
			</Container>
			<div id="background-images">

				<img id="background-rectangle-2" src="/assets/rect-2.png" alt="rect-2" />
				<img id="background-rectangle-3" src="/assets/rect-3.png" alt="rect-3" />
			</div>
			<Footer />
		</div>
	)
}



export default Layout;
