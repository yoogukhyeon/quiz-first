import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
	children: ReactNode;
}

export default function Main({ children }: IProps) {
	return <MainWrap>{children}</MainWrap>;
}

const MainWrap = styled.div`
	width: 100%;
	max-width: 375px;
	margin: 0 auto;
	padding: 0 10px;
`;
