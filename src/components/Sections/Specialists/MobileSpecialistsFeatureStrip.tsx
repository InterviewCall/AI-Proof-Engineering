import { FC } from 'react';

import { type SpecialistAccent } from '@/types/specialists';
import { mobileSpecialistFeatureStrip } from '@/utils/specialistsItems';

const iconAccentStyles: Record<SpecialistAccent, string> = {
    blue: 'text-(--specialist-card-blue-text)',
    green: 'text-(--specialist-card-green-text)',
    purple: 'text-(--specialist-card-purple-text)',
    orange: 'text-(--specialist-card-orange-text)',
};

const MobileSpecialistsFeatureStrip: FC = () => {
    const items = mobileSpecialistFeatureStrip;
    const lastIndex = items.length - 1;

    return (
        <div
            className="
                grid
                grid-cols-2
                gap-y-5
                rounded-2xl
                bg-(--specialists-mobile-strip-bg)
                px-5
                py-6
                sm:grid-cols-4
                sm:gap-x-4
                sm:gap-y-0
            "
        >
            {items.map((item, index) => {
                const Icon = item.icon;
                const isRightColumnBase = index % 2 === 1;
                const isLastItem = index === lastIndex;

                return (
                    <div
                        key={item.title}
                        className={`
                            flex
                            flex-col
                            items-center
                            gap-2
                            border-(--specialists-mobile-strip-divider)
                            px-3
                            text-center
                            ${isRightColumnBase ? '' : 'border-r'}
                            ${isLastItem ? 'sm:border-r-0' : 'sm:border-r'}
                        `}
                    >
                        <Icon
                            aria-hidden="true"
                            className={`h-6 w-6 ${iconAccentStyles[item.accent]}`}
                            strokeWidth={1.9}
                        />

                        <span
                            className="
                                text-[13px]
                                font-semibold
                                leading-tight
                                text-(--specialists-strip-title-text)
                            "
                        >
                            {item.title}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default MobileSpecialistsFeatureStrip;
