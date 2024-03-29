// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
	// Basic Auth example taken from https://github.com/vercel/examples/tree/main/edge-functions/basic-auth-password
	const basicAuth = req.headers.get('authorization');
	const url = req.nextUrl;

	if (basicAuth) {
		const authValue = basicAuth.split(' ')[1];
		const [user, pwd] = atob(authValue).split(':');

		if (user === 'yoo' && pwd === 'qwe123') {
			return NextResponse.next();
		}
	}
	url.pathname = '/api/basicauth';

	return NextResponse.rewrite(url);
}

export const config = {
	matcher: ['/api-docs', '/api/:path*'],
};
