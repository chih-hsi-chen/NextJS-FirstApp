import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import Layout from '../components/Layout';
import '../styles/App.css';

const MyApp = function ({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Next.js + MongoDB App</title>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
};


export default MyApp;