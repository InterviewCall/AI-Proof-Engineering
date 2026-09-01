import { FC, Fragment } from 'react';

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
                flex
                items-center
                justify-between
                rounded-2xl
                bg-(--progress-section-mobile-strip-bg)
                px-4
                py-4
            "
        >
            {items.map((item, index) => {
                const Icon = item.icon;
                const isLastItem = index === items.length - 1;

                return (
                    <Fragment key={item.title}>
                        <div className="flex min-w-0 flex-1 items-center gap-2">
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
                                    text-[12px]
                                    font-bold
                                    leading-tight
                                    text-(--progress-section-strip-title-text)
                                "
                            >
                                {item.title}
                            </span>
                        </div>

                        {!isLastItem && (
                            <span
                                aria-hidden="true"
                                className="
                                    h-8
                                    w-px
                                    shrink-0
                                    bg-(--progress-section-sidebar-divider)
                                "
                                
                            />
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default MobileProgressFeatureStrip;
