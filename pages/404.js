import Head from 'next/head';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function Custom404({ statusCode }) {
	return (
		<div className="container">
			<Head>
				<title>George Iliadis | Page not found </title>
				<link rel="stylesheet" type="text/css" href="index.css" />
			</Head>
			<Layout>
				<main>
					<h2>Error 404 - Page not found</h2>
					<p>{statusCode}</p>
				</main>
			</Layout>

		</div>
	);
}