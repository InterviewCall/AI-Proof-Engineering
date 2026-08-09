import type { FC } from 'react';

type IconProps = {
    className?: string;
};

export const YoutubeIcon: FC<IconProps> = ({ className = '' }) => {
    return (
        <svg
            aria-hidden="true"
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.4a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
    );
};

export default YoutubeIcon;
