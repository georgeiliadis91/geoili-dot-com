import Head from 'next/head';
import { useState } from 'react';
import Fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import Custom404 from '../404';
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment';

export default function Blog({ data }) {
	const [blog, setBlog] = useState(data);
	// console.log(blog);
	if (blog[0].statusCode == 404) {
		return <Custom404 statusCode="No such teacher" />;
	} else {
		return (
			<div className="container">
				<Head>
					<title>George Iliadis | {blog[0].title} </title>
					<link rel="stylesheet" href="../index.css" />
					<meta property="title" content={blog[0].title}></meta>
					<meta property="og:title" content={blog[0].title}></meta>
					<meta property="og:image" content={process.env.apiUrl + blog[0].banner.url} />

					<meta name="Description" content={blog[0].title} />
				</Head>
				<Layout>
					<main>
						<img className="banner-image" src={process.env.apiUrl + blog[0].banner.url} alt={blog[0].title} />
						<p className="blog-date">
							<Moment format="DD - MMMM - YY">
								{blog[0].created_at}
							</Moment>

						</p>

						<h2 id="title">{blog[0].title}</h2>

						<p id="blog-body"><ReactMarkdown source={blog[0].body} /></p>



					</main>
				</Layout>


			</div>
		);
	}
}

export async function getServerSideProps(context) {
	const res = await fetch(
		process.env.apiUrl + '/blogs?slug=' + context.params.slug
	);
	const data = await res.json();
	// console.log(data)
	return {
		props: { data },
	};
}