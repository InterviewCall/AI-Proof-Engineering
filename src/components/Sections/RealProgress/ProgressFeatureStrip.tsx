import { FC } from 'react';

import { type ProgressAccent } from '@/types/realProgress';
import { progressFeatureStrip } from '@/utils/realProgressItems';

const accentStyles: Record<ProgressAccent, string> = {
    one: 'bg-(--progress-section-card-one-bg) text-(--progress-section-card-one-accent)',
    two: 'bg-(--progress-section-card-two-bg) text-(--progress-section-card-two-accent)',
    three:
        'bg-(--progress-section-card-three-bg) text-(--progress-section-card-three-accent)',
    four: 'bg-(--progress-section-card-four-bg) text-(--progress-section-card-four-accent)',
};

const ProgressFeatureStrip: FC = () => {
    return (
        <div
            className="
                grid
                grid-cols-2
                gap-x-4
                gap-y-6
                rounded-2xl
                border
                border-(--progress-section-strip-border)
                bg-(--progress-section-strip-bg)
                px-5
                py-6
                sm:grid-cols-3
                sm:px-8
                lg:grid-cols-5
                lg:divide-x
                lg:divide-(--progress-section-strip-border)
                lg:py-7
            "
        >
            {progressFeatureStrip.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="flex items-center gap-3 px-2 lg:items-start lg:first:pl-0"
                    >
                        <span
                            className={`
                                flex
                                h-20
                                w-20
                                shrink-0
                                items-center
                                justify-center
                                rounded-[10px]
                                ${accentStyles[item.accent]}
                            `}
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-10 w-10"
                                strokeWidth={1.8}
                            />
                        </span>

                        <div className="min-w-0">
                            <p
                                className="
                                    text-[14px]
                                    font-semibold
                                    leading-tight
                                    text-(--progress-section-strip-title-text)
                                "
                            >
                                {item.title}
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[12px]
                                    leading-[1.4]
                                    text-(--progress-section-strip-text)
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

export default ProgressFeatureStrip;
