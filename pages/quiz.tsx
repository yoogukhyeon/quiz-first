import React from 'react';
import Main from '@/components/layouts/Main';
import styled from 'styled-components';
import { Top } from '@/components/layouts/Top';
import { Bottom } from '@/components/layouts/Bottom';
import { GetServerSidePropsContext } from 'next';
import QuizeList from '@/components/quiz/QuizeList';
export default function Quiz() {
	return (
		<>
			<Top />
			<Main>
				<QuizeList />
			</Main>
			<Bottom />
		</>
	);
}

// export const getServerSideProps = async ({ req, query, params }: GetServerSidePropsContext) => {
// 	return {
// 		props: {},
// 	};
// };
