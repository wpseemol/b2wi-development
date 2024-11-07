'use client';

import { useEffect, useState } from 'react';
import NavMenu from './nav-menu';

export default function HeaderMenuSticky() {
    const [scrollYPosition, setScrollYPosition] = useState<number>(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollYPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed left-0 w-screen duration-200 bg-gradient-to-r from-[#2d3544] to-[#0165ac] border-y-[1px] border-neutral-100/30 md:py-5 py-4 dark:bg-gradient-to-r dark:from-[#224a94] dark:to-[#17174b] md:px-3 px-2 $
            z-50 ${scrollYPosition >= 240 ? 'top-0' : '-top-[10rem]'}
            
            ${scrollYPosition >= 200 ? '' : 'hidden'}`}>
            <NavMenu />
        </nav>
    );
}
