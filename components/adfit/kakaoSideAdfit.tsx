import React, { useEffect, useRef } from 'react';

function KakaoSideAdFit() {
	// 최초 1회만 광고를 불러오기 위한 변수
	const adRef = useRef<boolean>(false);

	useEffect(() => {
		// 로딩된 광고가 있으면, 추가 로딩 X
		if (adRef.current) {
			return;
		}

		// 윈도우 사이즈에 따라 광고 사이즈 조정(사이즈마다 해당 광고 단위 ID 적용)
		const winodwSize = window.innerWidth;
		if (winodwSize > 1100) {
			const ins: any = document.createElement('ins');
			const script: any = document.createElement('script');

			ins.className = 'kakao_ad_area';
			ins.style = 'display:none;';

			ins.setAttribute('data-ad-width', '160');
			ins.setAttribute('data-ad-height', '600');
			ins.setAttribute('data-ad-unit', 'DAN-zly5FQx1DW9nr5Zw');

			script.async = 'true';
			script.type = 'text/javascript';
			script.src = '//t1.daumcdn.net/kas/static/ba.min.js';

			document.querySelector('.aside_side_kakaoAdFit')?.appendChild(ins);
			document.querySelector('.aside_side_kakaoAdFit')?.appendChild(script);

			// 광고 로딩 여부 상태 변경
			adRef.current = true;
		}
	}, []);
	return (
		<>
			<div className="aside_side_kakaoAdFit"></div>
		</>
	);
}

export default React.memo(KakaoSideAdFit);
