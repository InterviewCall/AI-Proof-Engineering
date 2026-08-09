import { FC } from 'react';

import { type MobileEcosystemItem } from '@/types/ecosystem';

const MobileEcosystemListItem: FC<{
    item: MobileEcosystemItem;
    isLast: boolean;
}> = ({ item, isLast }) => {
    const Icon = item.icon;

    return (
        <div
            className={`
                flex
                items-center
                gap-3.5
                py-3.5
                first:pt-0
                last:pb-0
                ${isLast ? '' : 'border-b border-(--ecosystem-community-card-border)'}
            `}
        >
            <span
                className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-(--ecosystem-community-card-icon-bg)
                    text-(--ecosystem-community-card-icon)
                "
            >
                <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
            </span>

            <p
                className="
                    text-[15px]
                    font-semibold
                    text-(--ecosystem-community-card-title)
                "
            >
                {item.label}
            </p>
        </div>
    );
};

export default MobileEcosystemListItem;
