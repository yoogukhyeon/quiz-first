/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	//   rewrites() {
	//     return [{ source: "/api/:path*", destination: "http://localhost:3000/:path*" }];
	//   },
};

module.exports = nextConfig;
