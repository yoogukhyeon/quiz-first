export const clipboard = (url: string) => {
	const textarea = document.createElement('textarea');
	document.body.appendChild(textarea);
	textarea.value = url;
	textarea.select();
	const result = document.execCommand('copy');

	if (result) {
		alert('URL 링크를 복사했습니다.');
		document.body.removeChild(textarea);
	}
};
