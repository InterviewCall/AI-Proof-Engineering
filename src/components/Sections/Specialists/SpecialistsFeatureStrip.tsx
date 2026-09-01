import { FC } from 'react';

import { type SpecialistAccent } from '@/types/specialists';
import { specialistFeatureStrip } from '@/utils/specialistsItems';

const accentStyles: Record<SpecialistAccent, string> = {
    blue: 'bg-(--specialist-card-blue-bg) text-(--specialist-card-blue-text)',
    green: 'bg-(--specialist-card-green-bg) text-(--specialist-card-green-text)',
    purple:
        'bg-(--specialist-card-purple-bg) text-(--specialist-card-purple-text)',
    orange:
        'bg-(--specialist-card-orange-bg) text-(--specialist-card-orange-text)',
};

const SpecialistsFeatureStrip: FC = () => {
    return (
        <div
            className="
                grid
                grid-cols-5
                rounded-2xl
                border
                border-(--specialists-strip-border)
                bg-(--specialists-strip-bg)
                px-5
                py-3
                lg:divide-x
                lg:divide-(--specialists-strip-border)
            "
        >
            {specialistFeatureStrip.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="
                            flex
                            min-w-0
                            items-center
                            gap-3
                            px-4
                            first:pl-0
                            last:pr-0
                        "
                    >
                        <span
                            className={`
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-[10px]
                                ${accentStyles[item.accent]}
                            `}
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-5.5 w-5.5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <div className="min-w-0">
                            <p
                                className="
                                    text-[14px]
                                    font-semibold
                                    leading-[1.2]
                                    text-(--specialists-strip-title-text)
                                "
                            >
                                {item.title}
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[12px]
                                    leading-[1.4]
                                    text-(--specialists-strip-text)
                                "
                            >
                                {item.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SpecialistsFeatureStrip;