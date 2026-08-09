import { FC } from 'react';

import { progressSidebarPoints } from '@/utils/realProgressItems';

const ProgressSidebarPanel: FC = () => {
    return (
        <div>
            <span
                className="
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-[0.04em]
                    text-(--progress-section-sidebar-eyebrow-text)
                "
            >
                What Progress Looks Like
            </span>

            <h3
                className="
                    mt-3
                    text-[26px]
                    font-bold
                    leading-[1.2]
                    tracking-[-1%]
                    text-(--progress-section-sidebar-title-text)
                "
            >
                From Learning Claims to{' '}
                <span className="text-(--progress-section-sidebar-highlight-text)">
                    Visible Proof
                </span>
            </h3>

            <p
                className="
                    mt-3
                    text-[15px]
                    leading-[1.55]
                    text-(--progress-section-sidebar-text)
                "
            >
                Learners build evidence of skill through structured practice,
                reviews, mocks, and capstone deliverables they can explain
                clearly.
            </p>

            <div className="mt-6 space-y-4 border-t border-(--progress-section-sidebar-divider) pt-6">
                {progressSidebarPoints.map((point) => {
                    const Icon = point.icon;

                    return (
                        <div
                            key={point.label}
                            className="flex items-center gap-3"
                        >
                            <span
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-(--progress-section-sidebar-icon-bg)
                                    text-(--progress-section-sidebar-icon-text)
                                "
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-4.5 w-4.5"
                                    strokeWidth={1.9}
                                />
                            </span>

                            <p
                                className="
                                    text-[14px]
                                    font-semibold
                                    leading-[1.35]
                                    text-(--progress-section-sidebar-title-text)
                                "
                            >
                                {point.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressSidebarPanel;
