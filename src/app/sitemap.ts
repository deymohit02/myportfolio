export default function sitemap() {
    const baseUrl = 'https://mohit-kumar-dey.vercel.app';

    // Get current date for lastModified
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];
}
