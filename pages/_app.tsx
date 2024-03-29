import GlobalStyles from '@/styles/globals';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';

const DEFAULT_SEO = {
	title: '스포츠 축구 상식 퀴즈',
	description: '에프엔에프, 축구 퀴즈, 스포츠 퀴즈, 상식 퀴즈, 축구 커뮤니티',
	canonical: 'https://quiz.fnfsoccer.com',
	openGraph: {
		//핸드폰 info 셋팅
		type: 'website',
		locale: 'ko_KR',
		url: 'https://quiz.fnfsoccer.com',
		title: '스포츠 축구 상식 퀴즈',
		site_name: '축구 퀴즈',
	},
};

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<>
			<DefaultSeo {...DEFAULT_SEO} />
			<Head>
				<title>Sport Quiz</title>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="description" content="Sport Quiz" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
				<link rel="canonical" href="https://quiz.fnfsoccer.com" />
				<meta property="og:type" content="퀴즈, 상식 퀴즈, 스포츠 퀴즈, 축구 퀴즈, 축구, soccer" />
				<meta property="og:title" content="스포츠 축구 상식 퀴즈"></meta>
				<meta property="og:url" content="https://quiz.fnfsoccer.com"></meta>
				<meta property="og:description" content="에프엔에프, 축구 퀴즈, 스포츠 퀴즈, 상식 퀴즈"></meta>
				<meta
					property="og:image"
					content="https://aws-yoo-bucket.s3.ap-northeast-2.amazonaws.com/images/lms/20230309/91f012c6-ccb6-4230-91ab-e467e3b21914.png"
				/>

				<meta name="naver-site-verification" content="2153b8288378785e834ec072cf4515aab5304d56" />
				<meta name="google-site-verification" content="WcQYf3Vcuw9cAmpDtiYMhsq32bB39WEYdvC7PHqR86A" />
			</Head>

			<Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-DDT8EVRHM2`} />
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						
						gtag('config', 'G-DDT8EVRHM2');
					`,
				}}
			/>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
			</QueryClientProvider>
		</>
	);
}
