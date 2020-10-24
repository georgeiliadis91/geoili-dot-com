import Link from 'next/link'


const Navbar = () => (
	<div>
		<img id="menu-background" src="/assets/rect-4.png" alt="rect-4" />
		<nav id="navigation-bar">
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/blog">
				<a>Blog</a>
			</Link>
			<Link href="#contact-block">
				<a>Contact</a>
			</Link>
		</nav>
	</div>
)

export default Navbar;