"use client"
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Extend Window so TypeScript knows about __lenis
declare global {
    interface Window {
        __lenis?: Lenis;
    }
}

const SmoothScroll = () => {
    useEffect(() => {
        // Disable smooth scroll on mobile for better performance
        const isMobile = window.innerWidth < 768;

        if (isMobile) {
            return; // Exit early on mobile devices
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 2,
        });

        // Expose instance globally so modals can call stop() / start()
        window.__lenis = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.__lenis = undefined;
        };
    }, []);

    return null;
};

export default SmoothScroll;
