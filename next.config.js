/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	//   rewrites() {
	//     return [{ source: "/api/:path*", destination: "http://localhost:3000/:path*" }];
	//   },
	images: {
		deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},
};

module.exports = nextConfig;
