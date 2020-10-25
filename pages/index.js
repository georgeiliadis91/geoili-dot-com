import Layout from '../components/Layout'
import Head from 'next/head'
import { Document, Page } from 'react-pdf';
import { useState } from 'react'
import Fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown'
import { Row, Col } from 'react-grid'

export default function home({ data, techdata }) {



	return (
		< div >
			<Head>
				<title>George Iliadis | Developer </title>
				<link rel="stylesheet" type="text/css" href="index.css" />
				<meta property="og:image" content="/assets/fb-share.jpeg" />
				<meta name="Description" content="George Iliadis, Web developer" />
			</Head>
			<Layout>
				<main>

					<div className="profile-header">
						<Row>
							<Col xs={12} md={3}>

								<div className="image-block">
									<img className="profile-image" src={process.env.apiUrl + data.photo.formats.thumbnail.url} alt={data.name} />
									<h2 className="profile-name">{data.name}</h2>
								</div>
							</Col>




							<Col xs={12} md={9}>
								<div className="portofolio-text"><ReactMarkdown source={data.portofolio} /></div>
							</Col>
						</Row>

					</div>

					<div className="tech-stack">
						<h2>Primary</h2>
						<div className="tech-area">
							{techdata.map(tech => { if (tech.primary) { return <span key={tech.id}>{tech.name}</span> } }
							)}
						</div>
						<h2>Secondary</h2>
						<div className="tech-area">
							{techdata.map(tech => { if (!tech.primary) { return <span key={tech.id}>{tech.name}</span> } }
							)}
						</div>
					</div>
					<div className="cv-download">
						<p>You can download my CV here</p>
						<a className="cv" href={process.env.apiUrl + data.cv.url} target="_blank">Download</a>
					</div>
				</main>

			</Layout>
		</div >
	)
}


export async function getServerSideProps() {
	const res = await fetch(
		process.env.apiUrl + '/home');
	const data = await res.json();

	const techs = await fetch(
		process.env.apiUrl + '/technologies?_sort=id:ASC');
	const techdata = await techs.json();

	return {
		props: { data, techdata },
	};
}