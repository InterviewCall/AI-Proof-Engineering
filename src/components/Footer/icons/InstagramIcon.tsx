import type { FC } from 'react';

type IconProps = {
    className?: string;
};

export const InstagramIcon: FC<IconProps> = ({ className = '' }) => {
    return (
        <svg
            aria-hidden="true"
            className={className}
            viewBox="0 0 24 24"
            fill="none"
        >
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            <circle
                cx="12"
                cy="12"
                r="4.2"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            <circle cx="17.35" cy="6.65" r="1.15" fill="currentColor" />
        </svg>
    );
};

export default InstagramIcon;
