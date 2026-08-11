import { FC } from 'react';

import { type EcosystemMiniCard } from '@/types/ecosystem';

const EcosystemMiniCardItem: FC<{ card: EcosystemMiniCard }> = ({ card }) => {
    const Icon = card.icon;

    return (
        <div
            className="
                flex
                items-start
                gap-x-5
                rounded-xl
                border
                border-(--ecosystem-community-card-border)
                bg-(--ecosystem-community-card-bg)
                p-4
            "
        >
            <span
                className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-(--ecosystem-community-card-icon-bg)
                    text-(--ecosystem-community-card-icon)
                "
            >
                <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.8} />
            </span>

            <div>
                <h4
                    className="
                        text-[15px]
                        font-bold
                        leading-tight
                        text-(--ecosystem-community-card-title)
                    "
                >
                    {card.title}
                </h4>

                <p
                    className="
                        mt-1.5
                        text-[13px]
                        leading-[1.45]
                        text-(--ecosystem-community-card-text)
                    "
                >
                    {card.description}
                </p>
            </div>
        </div>
    );
};

export default EcosystemMiniCardItem;
