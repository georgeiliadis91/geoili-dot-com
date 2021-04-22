import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {


	return (


		<footer id="website-footer">
			<p>COPYRIGHT©{new Date().getFullYear()} GEORGE ILIADIS ALL RIGHTS RESERVED</p>

			<div className="social-block">

				<a target="_blank" href={process.env.linkedin}>
					<FaLinkedin size="1.5rem" />
				</a>
				<a target="_blank" href={process.env.github}>
					<FaGithub size="1.5rem" />
				</a>
			</div>
		</footer>

	)
};


export default Footer;