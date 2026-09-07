import { ChevronRight } from 'lucide-react';
import { FC, KeyboardEvent } from 'react';

import {
    type MobileSpecialist,
    type SpecialistAccent,
} from '@/types/specialists';

const iconStyles: Record<SpecialistAccent, string> = {
    blue: 'bg-(--specialist-card-blue-bg) text-(--specialist-card-blue-text)',
    green: 'bg-(--specialist-card-green-bg) text-(--specialist-card-green-text)',
    purple:
        'bg-(--specialist-card-purple-bg) text-(--specialist-card-purple-text)',
    orange:
        'bg-(--specialist-card-orange-bg) text-(--specialist-card-orange-text)',
};

type MobileMentorRowProps = {
    specialist: MobileSpecialist;
    onClick?: () => void;
};

const MobileMentorRow: FC<MobileMentorRowProps> = ({
    specialist,
    onClick,
}) => {
    const Icon = specialist.icon;

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (!onClick) return;

        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick();
        }
    };

    return (
        <div
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            className={`
                flex
                min-w-0
                items-center
                gap-3
                rounded-[17px]
                border
                border-(--specialist-card-border)
                bg-(--specialist-card-bg)
                px-4
                py-4
                sm:gap-4
                sm:px-5
                sm:py-4
                ${
                    onClick
                        ? `
                    cursor-pointer
                    transition-colors
                    duration-150
                    active:bg-(--specialist-card-active-bg,theme(colors.gray.50))
                    focus-visible:outline-none
                    focus-visible:ring-4
                    focus-visible:ring-(--focus-ring-color)
                `
                        : ''
                }
            `}
        >
            {/* Specialist icon */}
            <span
                className={`
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    ${iconStyles[specialist.accent]}
                `}
            >
                <Icon
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.8}
                />
            </span>

            {/* Content */}
            <div className="min-w-0 flex-1">
                <h3
                    className="
                        text-[16px]
                        font-bold
                        leading-[1.25]
                        tracking-[-0.01em]
                        text-(--specialist-card-name)
                        sm:text-[17px]
                    "
                >
                    {specialist.title}
                </h3>

                <p
                    className="
                        mt-1.5
                        break-words
                        text-[12px]
                        font-medium
                        leading-[1.45]
                        text-(--specialist-card-role)
                        sm:text-[13px]
                    "
                >
                    {specialist.tags.join(' • ')}
                </p>
            </div>

            {/* Arrow */}
            <ChevronRight
                aria-hidden="true"
                className="
                    h-5
                    w-5
                    shrink-0
                    text-(--specialists-mobile-chevron)
                "
                strokeWidth={2.2}
            />
        </div>
    );
};

export default MobileMentorRow;