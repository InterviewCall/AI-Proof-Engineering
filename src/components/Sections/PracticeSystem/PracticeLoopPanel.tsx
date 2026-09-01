import { FC } from 'react';

import { loopBullets } from '@/utils/practiceSystemItems';

const PracticeLoopPanel: FC = () => {
    return (
        <div className="flex flex-col justify-center p-6 xl:p-8">
            <span
                className="
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-[0.04em]
                    text-(--color-brand-700)
                "
            >
                Practice Loop
            </span>

            <h3
                className="
                    mt-3
                    text-[24px]
                    font-bold
                    leading-[1.1]
                    tracking-[-1%]
                    text-(--practice-section-card-title)
                    max-w-[360px]
                    xl:text-[28px]
                "
            >
                Turn Learning Into Measurable Engineering Progress
            </h3>

            <p
                className="
                    mt-3
                    text-[15px]
                    font-semibold
                    leading-[1.55]
                    text-(--practice-section-card-text)
                "
            >
                Move from concepts to execution through topic-wise practice,
                debugging tasks, machine coding, system design prompts, and
                AI-assisted engineering assignments.
            </p>

            <div className="mt-5 space-y-3">
                {loopBullets.map((bullet) => {
                    const Icon = bullet.icon;

                    return (
                        <div
                            key={bullet.label}
                            className="flex items-center gap-3"
                        >
                            <span
                                className="
                                    flex
                                    h-10.5
                                    w-10.5
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-[10px]
                                    border
                                    border-(--practice-section-board-border)
                                    bg-white
                                    text-(--color-brand-700)
                                "
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    strokeWidth={1.8}
                                />
                            </span>

                            <p
                                className="
                                    text-[14px]
                                    font-bold
                                    leading-[1.3]
                                    text-(--practice-section-card-title)
                                "
                            >
                                {bullet.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PracticeLoopPanel;
