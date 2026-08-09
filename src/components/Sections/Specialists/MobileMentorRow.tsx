import { ChevronRight } from 'lucide-react';
import { FC } from 'react';

import { type MobileSpecialist, type SpecialistAccent } from '@/types/specialists';

const iconStyles: Record<SpecialistAccent, string> = {
    blue: 'bg-(--specialist-card-blue-bg) text-(--specialist-card-blue-text)',
    green: 'bg-(--specialist-card-green-bg) text-(--specialist-card-green-text)',
    purple:
        'bg-(--specialist-card-purple-bg) text-(--specialist-card-purple-text)',
    orange:
        'bg-(--specialist-card-orange-bg) text-(--specialist-card-orange-text)',
};

const MobileMentorRow: FC<{ specialist: MobileSpecialist }> = ({
    specialist,
}) => {
    const Icon = specialist.icon;

    return (
        <div
            className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-(--specialist-card-border)
                bg-(--specialist-card-bg)
                p-4
            "
        >
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
                <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
            </span>

            <div className="min-w-0 flex-1">
                <h3
                    className="
                        text-[17px]
                        font-bold
                        leading-tight
                        text-(--specialist-card-name)
                    "
                >
                    {specialist.title}
                </h3>

                <p
                    className="
                        mt-1
                        text-[13px]
                        leading-[1.4]
                        text-(--specialist-card-role)
                    "
                >
                    {specialist.tags.join(' • ')}
                </p>
            </div>

            <ChevronRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-(--specialists-mobile-chevron)"
                strokeWidth={2.2}
            />
        </div>
    );
};

export default MobileMentorRow;
