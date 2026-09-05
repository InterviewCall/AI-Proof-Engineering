import { FC } from 'react';

import { type EcosystemAccent, type ProgramUpdate } from '@/types/ecosystem';

const iconStyles: Record<EcosystemAccent, string> = {
    blue: 'bg-(--ecosystem-resource-blue-bg) text-(--ecosystem-resource-blue-icon)',
    green:
        'bg-(--ecosystem-resource-green-bg) text-(--ecosystem-resource-green-icon)',
    purple:
        'bg-(--ecosystem-resource-purple-bg) text-(--ecosystem-resource-purple-icon)',
};

const categoryStyles: Record<EcosystemAccent, string> = {
    blue: 'text-(--ecosystem-resource-blue-icon)',
    green: 'text-(--ecosystem-resource-green-icon)',
    purple: 'text-(--ecosystem-resource-purple-icon)',
};

const MobileUpdateCard: FC<{ update: ProgramUpdate }> = ({ update }) => {
    const Icon = update.icon;

    return (
        <div
            className="
                flex
                items-start
                gap-3.5
                rounded-2xl
                border
                border-(--ecosystem-resource-card-border)
                bg-(--ecosystem-resource-card-bg)
                p-4
            "
        >
            <span
                className={`
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${iconStyles[update.accent]}
                `}
            >
                <Icon
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.7}
                />
            </span>

            <div className="min-w-0 flex-1">
                <span
                    className={`
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.03em]
                        ${categoryStyles[update.accent]}
                    `}
                >
                    {update.category}
                </span>

                <h3
                    className="
                        mt-1
                        text-[15px]
                        font-bold
                        leading-tight
                        text-(--ecosystem-resource-card-title)
                    "
                >
                    {update.title}
                </h3>

                {update.description && (
                    <p
                        className="
                            mt-1.5
                            text-[13px]
                            leading-[1.45]
                            text-(--ecosystem-resource-card-text)
                        "
                    >
                        {update.description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default MobileUpdateCard;