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

    return (
        <div
            className="
                grid
                grid-cols-2
                overflow-hidden
                rounded-[17px]
                border
                border-(--specialist-card-border)
                bg-(--specialists-mobile-strip-bg)
                sm:grid-cols-4
            "
        >
            {items.map((item, index) => {
                const Icon = item.icon;

                const isRightColumn = index % 2 === 1;
                const isLastRow =
                    index >= items.length - 2;

                return (
                    <div
                        key={item.title}
                        className={`
                            flex
                            min-w-0
                            items-center
                            justify-center
                            gap-2.5
                            px-3
                            py-4
                            text-center

                            sm:min-h-[88px]
                            sm:px-4
                            sm:py-4

                            ${
                                !isRightColumn
                                    ? 'border-r border-(--specialists-mobile-strip-divider)'
                                    : ''
                            }

                            ${
                                !isLastRow
                                    ? 'border-b border-(--specialists-mobile-strip-divider)'
                                    : ''
                            }

                            sm:border-b-0
                            sm:border-r
                            sm:last:border-r-0
                        `}
                    >
                        <Icon
                            aria-hidden="true"
                            className={`
                                h-6
                                w-6
                                shrink-0
                                ${iconAccentStyles[item.accent]}
                            `}
                            strokeWidth={1.9}
                        />

                        <span
                            className="
                                min-w-0
                                text-[12px]
                                font-semibold
                                leading-[1.3]
                                text-(--specialists-strip-title-text)
                                sm:text-[13px]
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