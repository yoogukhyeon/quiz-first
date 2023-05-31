/** @type {import('next-sitemap').IConfig} **/

const siteUrl = 'https://quiz.fnfsoccer.com';
module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: '*', allow: '/', disallow: ['/404'] }],
	},
};
