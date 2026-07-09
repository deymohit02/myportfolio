export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/'],
        },
        sitemap: 'https://mohit-kumar-dey-portfolio.vercel.app/sitemap.xml',
    };
}
