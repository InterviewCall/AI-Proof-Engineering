import { UserRound } from 'lucide-react';
import { FC } from 'react';

import { type Specialist, type SpecialistAccent } from '@/types/specialists';

const avatarStyles: Record<SpecialistAccent, string> = {
    blue: 'bg-(--specialist-card-blue-bg) text-(--specialist-card-blue-text)',
    green: 'bg-(--specialist-card-green-bg) text-(--specialist-card-green-text)',
    purple:
        'bg-(--specialist-card-purple-bg) text-(--specialist-card-purple-text)',
    orange:
        'bg-(--specialist-card-orange-bg) text-(--specialist-card-orange-text)',
};

const badgeStyles: Record<SpecialistAccent, string> = {
    blue: 'bg-(--specialist-card-blue-text)',
    green: 'bg-(--specialist-card-green-text)',
    purple: 'bg-(--specialist-card-purple-text)',
    orange: 'bg-(--specialist-card-orange-text)',
};

const underlineStyles: Record<SpecialistAccent, string> = {
    blue: 'bg-(--specialist-card-blue-text)',
    green: 'bg-(--specialist-card-green-text)',
    purple: 'bg-(--specialist-card-purple-text)',
    orange: 'bg-(--specialist-card-orange-text)',
};

const tagStyles: Record<SpecialistAccent, string> = {
    blue: 'bg-(--specialist-card-blue-bg) text-(--specialist-card-blue-text)',
    green: 'bg-(--specialist-card-green-bg) text-(--specialist-card-green-text)',
    purple:
        'bg-(--specialist-card-purple-bg) text-(--specialist-card-purple-text)',
    orange:
        'bg-(--specialist-card-orange-bg) text-(--specialist-card-orange-text)',
};

const SpecialistCard: FC<{ specialist: Specialist }> = ({ specialist }) => {
    return (
        <article
            className="
                flex
                flex-col
                items-center
                rounded-2xl
                border
                border-(--specialist-card-border)
                bg-(--specialist-card-bg)
                p-4
                text-center
            "
        >
            <div className="relative">
                <span
                    className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        ${avatarStyles[specialist.accent]}
                    `}
                >
                    <UserRound
                        aria-hidden="true"
                        className="h-7 w-7"
                        strokeWidth={1.6}
                    />
                </span>

                <span
                    className={`
                        absolute
                        -bottom-0.5
                        -right-0.5
                        flex
                        h-5.5
                        w-5.5
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-(--specialist-card-bg)
                        text-[11px]
                        font-bold
                        text-white
                        ${badgeStyles[specialist.accent]}
                    `}
                >
                    {specialist.number}
                </span>
            </div>

            <h3
                className="
                    mt-3
                    text-[14px]
                    font-bold
                    leading-tight
                    text-(--specialist-card-name)
                "
            >
                {specialist.name}
            </h3>

            <span
                className={`
                    mt-2
                    h-1
                    w-8
                    rounded-full
                    ${underlineStyles[specialist.accent]}
                `}
            />

            <p
                className="
                    mt-2
                    text-[12px]
                    leading-[1.45]
                    text-(--specialist-card-role)
                "
            >
                {specialist.description}
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {specialist.tags.map((tag) => (
                    <span
                        key={tag}
                        className={`
                            inline-flex
                            min-h-6
                            items-center
                            rounded-full
                            px-2.5
                            text-[11px]
                            font-semibold
                            whitespace-nowrap
                            ${tagStyles[specialist.accent]}
                        `}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
};

export default SpecialistCard;
