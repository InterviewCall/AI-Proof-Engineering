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
                grid-cols-2
                gap-x-4
                gap-y-6
                rounded-2xl
                border
                border-(--specialists-strip-border)
                bg-(--specialists-strip-bg)
                px-5
                py-6
                sm:grid-cols-3
                sm:px-8
                lg:grid-cols-5
                lg:divide-x
                lg:divide-(--specialists-strip-border)
                lg:py-7
            "
        >
            {specialistFeatureStrip.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="flex items-start gap-3 px-2 lg:first:pl-0"
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
                                    leading-tight
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
