import { ChevronRight } from 'lucide-react';
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

const ProgramUpdateRow: FC<{ update: ProgramUpdate; isLast: boolean }> = ({
    update,
    isLast,
}) => {
    const Icon = update.icon;

    return (
        <div
            className={`
                flex
                items-start
                gap-4
                py-5
                first:pt-0
                last:pb-0
                ${isLast ? '' : 'border-b border-(--ecosystem-updates-divider)'}
            `}
        >
            <span
                className={`
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${iconStyles[update.accent]}
                `}
            >
                <Icon aria-hidden="true" className="h-6.5 w-6.5" strokeWidth={1.7} />
            </span>

            <div className="min-w-0 flex-1">
                <span
                    className={`
                        text-[12px]
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
                        text-[17px]
                        font-bold
                        leading-tight
                        text-(--ecosystem-resource-card-title)
                    "
                >
                    {update.title}
                </h3>

                <p
                    className="
                        mt-1.5
                        text-[13.5px]
                        leading-[1.5]
                        text-(--ecosystem-resource-card-text)
                    "
                >
                    {update.description}
                </p>
            </div>

            <ChevronRight
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-(--ecosystem-updates-chevron)"
                strokeWidth={2.2}
            />
        </div>
    );
};

export default ProgramUpdateRow;
