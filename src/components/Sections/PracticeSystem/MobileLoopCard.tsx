import { CheckCircle2 } from 'lucide-react';
import { FC } from 'react';

import { mobileLoopBullets } from '@/utils/practiceSystemItems';

import LoopDiagram from './LoopDiagram';

const MobileLoopCard: FC = () => {
    return (
        <div
            className="
                rounded-2xl
                border
                border-(--practice-section-board-border)
                bg-(--practice-section-board-bg)
                p-5
                sm:p-6
            "
        >
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                <div className="text-center sm:text-left">
                    <span
                        className="
                            text-[12px]
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
                            mt-2
                            text-[24px]
                            font-bold
                            leading-[1.2]
                            tracking-[-1%]
                            text-(--practice-section-card-title)
                        "
                    >
                        Turn Learning Into Progress
                    </h3>

                    <p
                        className="
                            mt-2
                            text-[14px]
                            leading-[1.5]
                            text-(--practice-section-card-text)
                        "
                    >
                        Practice with structured tasks, labs, mock
                        interviews, and mentor feedback.
                    </p>
                </div>

                <LoopDiagram />
            </div>

            <div className="mt-5 space-y-2.5">
                {mobileLoopBullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2.5">
                        <CheckCircle2
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 text-(--button-primary-bg)"
                            strokeWidth={2}
                        />

                        <p
                            className="
                                text-[14px]
                                font-medium
                                text-(--practice-section-card-title)
                            "
                        >
                            {bullet}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileLoopCard;
