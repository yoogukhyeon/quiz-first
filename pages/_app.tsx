import GlobalStyles from '@/styles/globals';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<>
			<Head>
				<title>Quiz Web</title>
				<meta name="description" content="Quiz Web" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
			</QueryClientProvider>
		</>
	);
}
