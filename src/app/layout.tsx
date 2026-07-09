import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';
import ClientLayout from '../components/layout/ClientLayout';
import { inter, instrumentSerif, playfairDisplay } from './fonts';

export const metadata = {
    metadataBase: new URL('https://mohit-kumar-dey-portfolio.vercel.app'),
    title: {
        default: 'Mohit Kumar Dey — Full Stack Developer',
        template: '%s | Mohit Kumar Dey'
    },
    description: 'I build accessible, pixel-perfect web experiences. Specializing in TypeScript, Next.js, and modern UI/UX design. Explore my projects and engineering journey.',
    keywords: ['Mohit Kumar Dey', 'Full Stack Developer', 'React Developer', 'Next.js Developer', 'Software Engineer', 'Portfolio', 'Web Design', 'India'],
    authors: [{ name: 'Mohit Kumar Dey' }],
    creator: 'Mohit Kumar Dey',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mohit-kumar-dey-portfolio.vercel.app',
        title: 'Mohit Kumar Dey — Full Stack Developer',
        description: 'I build accessible, pixel-perfect web experiences. Explore my projects and engineering journey.',
        siteName: 'Mohit Kumar Dey',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Mohit Kumar Dey - Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mohit Kumar Dey — Full Stack Developer',
        description: 'Exploring the intersection of design and code.',
        images: ['/og-image.png'],
        creator: '@deymohit02',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google04e24580823c8b31',
    },
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${inter.variable} ${instrumentSerif.variable} ${playfairDisplay.variable}`}
        >
            <head>
                {/* DNS Prefetch for external resources */}
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://i.pinimg.com" />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    const savedTheme = localStorage.getItem('theme');
                                    if (savedTheme === 'dark' || (!savedTheme)) {
                                        document.documentElement.classList.add('dark');
                                    } else {
                                        document.documentElement.classList.remove('dark');
                                    }
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-92FT4Y8L8T"
                    strategy="lazyOnload"
                />
                <Script id="google-analytics" strategy="lazyOnload">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-92FT4Y8L8T');
                    `}
                </Script>
            </head>
            <body className="antialiased">
                <Providers>
                    <ClientLayout>
                        {children}
                    </ClientLayout>
                </Providers>
            </body>
        </html>
    );
}
