import Head from 'next/head';
import Fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

export default function Blog({ blogData, statusCode }) {


	const [blogs, setBlogs] = useState(blogData);
	console.log(blogs);
	return (
		<div className="container">
			<Head>
				<title>George Iliadis | Blog </title>
				<link rel="stylesheet" href="index.css" />
				<meta property="og:image" content="/assets/fb-share.jpeg" />
				<meta name="Description" content="George Iliadis Blog" />
			</Head>
			<Layout>
				<main>
					<div className="my-grid-container">
						<div className="my-grid-row">


							{blogs.map((blog, index) => {
								return (
									<div className="my-grid-item" key={index}>

										<a href={'/blog/' + blog.slug}>
											<p>
												{blog.title}
											</p>


											<img
												src={process.env.apiUrl + blog.banner.url}
												alt={blog.title}
											/>
										</a>


									</div>
								);
							})}

						</div>
					</div>
				</main>
			</Layout>

		</div>
	);
}

Blog.getInitialProps = async () => {
	const res = await fetch(process.env.apiUrl + '/blogs?_sort=created_at:DESC');

	if (!res) {
		return {
			blogData: null,
			statusCode: 404,
		};
	} else {
		const data = await res.json();
		return {
			blogData: data,
			statusCode: 200,
		};
	}
};
