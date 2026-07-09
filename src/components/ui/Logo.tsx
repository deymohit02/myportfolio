import React from 'react';
import Image from 'next/image';

const Logo = ({ className = 'w-14 h-14' }) => {
    return (
        <Image
            className={className}
            src="/logo.png"
            alt="Mohit Kumar Dey Logo"
            width={56}
            height={56}
            priority
        />
    );
};

export default Logo;
