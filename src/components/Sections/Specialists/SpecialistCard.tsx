import { UserRound } from 'lucide-react';
import type { Specialist } from '@/types/specialists';

type SpecialistCardProps = {
    specialist: Specialist;
};

const accentStyles = {
    blue: {
        iconBg: 'bg-blue-50',
        icon: 'text-blue-600',
        number: 'bg-blue-600',
        line: 'bg-blue-600',
        tag: 'bg-blue-50 text-blue-700',
    },
    green: {
        iconBg: 'bg-emerald-50',
        icon: 'text-emerald-600',
        number: 'bg-emerald-600',
        line: 'bg-emerald-600',
        tag: 'bg-emerald-50 text-emerald-700',
    },
    purple: {
        iconBg: 'bg-violet-50',
        icon: 'text-violet-600',
        number: 'bg-violet-600',
        line: 'bg-violet-600',
        tag: 'bg-violet-50 text-violet-700',
    },
    orange: {
        iconBg: 'bg-orange-50',
        icon: 'text-orange-600',
        number: 'bg-orange-500',
        line: 'bg-orange-500',
        tag: 'bg-orange-50 text-orange-700',
    },
};

const SpecialistCard = ({ specialist }: SpecialistCardProps) => {
    const styles = accentStyles[specialist.accent];

    const renderTag = (tag: string) => (
        <span
            key={tag}
            className={`
                inline-flex
                min-h-7.5
                w-fit
                shrink-0
                items-center
                justify-center
                rounded-full
                px-3.5
                py-2
                text-[11.5px]
                font-semibold
                leading-none
                ${styles.tag}
            `}
        >
            {tag}
        </span>
    );

    return (
        <article
            className="
                relative
                grid
                grid-rows-subgrid
                row-span-5
              
                min-h-[471px]
                w-full
                
                justify-items-center
                rounded-[17px]
                border
                border-(--specialist-card-border)
                bg-(--specialist-card-bg)
                px-3
                pt-5
                pb-4
            "
        >
            {/* Mentor avatar */}
            <div
                className={`
                    relative
                    flex
                    h-[86px]
                    w-[86px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    ${styles.iconBg}
                `}
            >
                <UserRound
                    aria-hidden="true"
                    className={`h-[48px] w-[48px] ${styles.icon}`}
                    strokeWidth={1.7}
                />

                {/* Number */}
                <span
                    className={`
                        absolute
                        -right-1
                        -bottom-1
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        text-[12px]
                        font-bold
                        text-white
                        ${styles.number}
                    `}
                >
                    {specialist.number}
                </span>
            </div>

            {/* Title */}
            <h3
                className="
                    mt-4
                    
                    w-full
                    text-center
                    text-[15.5px]
                    font-bold
                    leading-[1.35]
                    tracking-[-0.01em]
                    text-[#0B1B3A]
                "
            >
                {specialist.name}
            </h3>

            {/* Accent line */}
            <div
                className={`
                    mt-3
                    h-1
                    w-10
                    shrink-0
                    rounded-full
                    ${styles.line}
                `}
            />

            {/* Description */}
            <p
                className="
                    mt-5
                    
                    w-full
                    text-center
                    text-[13.5px]
                    font-medium
                    leading-[1.55]
                    text-[#18345F]
                "
            >
                {specialist.description}
            </p>

            {/* Skills / Tags */}
            {specialist.tags.length === 3 ? (
                <div className="mt-4 flex w-full flex-col items-center gap-5">
                    {/* Top tag */}
                    <div className="flex w-full justify-center">
                        {renderTag(specialist.tags[0])}
                    </div>

                    {/* Bottom two tags */}
                    <div className="flex items-center justify-center gap-x-1.5">
                        {renderTag(specialist.tags[1])}
                        {renderTag(specialist.tags[2])}
                    </div>
                </div>
            ) : (
                <div
                    className="
                        mt-4
                        flex
                        w-full
                        flex-wrap
                        items-center
                        justify-center
                        gap-x-1.5
                        gap-y-3
                    "
                >
                    {specialist.tags.map(renderTag)}
                </div>
            )}
        </article>
    );
};

export default SpecialistCard;