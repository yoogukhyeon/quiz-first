import GlobalStyles from '@/styles/globals';
import Head from 'next/head';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Quiz Web</title>
				<meta name="description" content="Quiz Web" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}
