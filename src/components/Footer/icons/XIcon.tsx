import type { FC } from 'react';

type IconProps = {
    className?: string;
};

export const XIcon: FC<IconProps> = ({ className = '' }) => {
    return (
        <svg
            aria-hidden="true"
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M18.24 3H21l-6.55 7.49L22 21h-6.29l-4.93-6.44L4.9 21H2.13l7.01-8.01L2 3h6.44l4.46 5.9L18.24 3Zm-1.1 16.17h1.55L7.94 4.74H6.28l10.86 14.43Z" />
        </svg>
    );
};

export default XIcon;
