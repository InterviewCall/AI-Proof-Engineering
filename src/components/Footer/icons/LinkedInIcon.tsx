import type { FC } from 'react';

type IconProps = {
    className?: string;
};

export const LinkedInIcon: FC<IconProps> = ({ className = '' }) => {
    return (
        <svg
            aria-hidden="true"
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.14V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-3.99V9Z" />
        </svg>
    );
};

export default LinkedInIcon;
