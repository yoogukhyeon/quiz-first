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
				<title>Sport Quiz</title>
				<meta name="description" content="Sport Quiz" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
				<meta property="og:type" content="퀴즈, 상식 퀴즈, 스포츠 퀴즈, 축구 퀴즈" />

				<meta property="og:title" content="스포츠 상식 퀴즈"></meta>
				<meta property="og:url" content="https://quiz.fnfsoccer.com/"></meta>
				<meta property="og:description" content="에프엔에프, 축구 퀴즈, 스포츠 퀴즈, 상식 퀴즈"></meta>
				<meta
					property="og:image"
					content="https://aws-yoo-bucket.s3.ap-northeast-2.amazonaws.com/images/lms/20230309/91f012c6-ccb6-4230-91ab-e467e3b21914.png"
				/>
			</Head>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
			</QueryClientProvider>
		</>
	);
}
