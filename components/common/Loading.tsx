import React from 'react';
import styled from 'styled-components';

export default function Loading() {
	return (
		<LoadingWrap>
			<div className="loading">
				<span className="loading_circle" />
			</div>
		</LoadingWrap>
	);
}

const LoadingWrap = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	.loading {
		position: relative;
		width: 80px;
		height: 80px;

		.loading_circle {
			display: block;
			width: 100%;
			height: 100%;

			border: 12px solid #eee;
			border-top: 12px solid #09a334;
			border-radius: 50%;
			animation: loading-spin 2s infinite;
		}
	}

	@keyframes loading-spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
