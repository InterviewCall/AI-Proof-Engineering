import type { FC } from 'react';

interface ChevronDownIconProps {
    className?: string;
}

export const ChevronDownIcon: FC<ChevronDownIconProps> = ({
    className = '',
}) => {
    return (
        <svg
            aria-hidden="true"
            className={className}
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
