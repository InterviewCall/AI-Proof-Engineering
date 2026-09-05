//import { ChevronRight } from 'lucide-react';
import { FC } from 'react';

import { type GlanceAccent, type GlanceInfoCard } from '@/types/programGlance';

const iconStyles: Record<GlanceAccent, string> = {
    blue: 'bg-(--program-glance-blue-bg) text-(--program-glance-blue-accent)',
    green: 'bg-(--program-glance-green-bg) text-(--program-glance-green-accent)',
    purple:
        'bg-(--program-glance-purple-bg) text-(--program-glance-purple-accent)',
    orange:
        'bg-(--program-glance-orange-bg) text-(--program-glance-orange-accent)',
};

const underlineStyles: Record<GlanceAccent, string> = {
    blue: 'bg-(--program-glance-blue-accent)',
    green: 'bg-(--program-glance-green-accent)',
    purple: 'bg-(--program-glance-purple-accent)',
    orange: 'bg-(--program-glance-orange-accent)',
};

const MobileProgramInfoCard: FC<{ card: GlanceInfoCard }> = ({ card }) => {
    const Icon = card.icon;

    return (
        <article
            className="
                rounded-2xl
                border
                border-(--program-glance-info-card-border)
                bg-(--program-glance-info-card-bg)
                p-4
            "
        >
            <div className="flex items-start justify-between gap-2">
                <span
                    className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-[11px]
                        ${iconStyles[card.accent]}
                    `}
                >
                    <Icon
                        aria-hidden="true"
                        className="h-5.5 w-5.5"
                        strokeWidth={1.7}
                    />
                </span>
{/* 
                <ChevronRight
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-(--program-glance-mobile-chevron)"
                    strokeWidth={2.2}
                /> */}
            </div>

            <h3
                className="
                    mt-3
                    text-[16px]
                    font-bold
                    leading-[1.3]
                    text-(--program-glance-info-card-title)
                "
            >
                {card.title}
            </h3>

            <span
                className={`
                    mt-2
                    block
                    h-1
                    w-7
                    rounded-full
                    ${underlineStyles[card.accent]}
                `}
            />

            <p
                className="
                    mt-2
                    text-[14px]
                    leading-[1.5]
                    text-(--program-glance-info-card-text)
                "
            >
                {card.description}
            </p>
        </article>
    );
};

export default MobileProgramInfoCard;