import { LucideIcon } from 'lucide-react';
import { FC } from 'react';

interface BadgeProps {
    text: string;
    icon?: LucideIcon;
    className?: string;
}

const Badge: FC<BadgeProps> = ({ text, icon: Icon, className = '' }) => {
    return (
        <div
            className={`
                flex
                w-fit
                min-h-10
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#AFC7FF]
                bg-[#EEF4FF]
                px-6
                text-[clamp(0.875rem,1.1vw,1.0625rem)]
                font-semibold
                uppercase
                tracking-[0.015em]
                text-(--proof-section-eyebrow-text)
                shadow-[0_7px_14px_rgba(1,17,57,0.18)]
                ring-1
                ring-[#a9c3fc]
                ${className}
            `}
        >
            {Icon && (
                <Icon
                    aria-hidden="true"
                    className="h-4.5 w-4.5"
                    strokeWidth={1.8}
                />
            )}

            <span>{text}</span>
        </div>
    );
};

export default Badge;