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

const MobileProgressFeatureStrip: FC = () => {
    const items = progressFeatureStrip.slice(0, 4);

    return (
        <div
            className="
                grid
                grid-cols-2
                overflow-hidden
                rounded-2xl
                bg-(--progress-section-mobile-strip-bg)
            "
        >
            {items.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="
                            flex
                            min-w-0
                            items-center
                            gap-2.5
                            px-4
                            py-4
                        "
                    >
                        <span
                            className={`
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                ${accentStyles[item.accent]}
                            `}
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-5 w-5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <span
                            className="
                                min-w-0
                                text-[12px]
                                font-bold
                                leading-tight
                                text-(--progress-section-strip-title-text)
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

export default MobileProgressFeatureStrip;