import {  } from 'lucide-react';
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
                p-4
                sm:p-6
            "
        >
            <div className="flex items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                    <span
                        className="
                            block
                            w-full
                            text-left
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
                            text-[22px]
                            font-bold
                            leading-[1.15]
                            tracking-[-1%]
                            text-(--practice-section-card-title)
                            text-left
                        "
                    >
                        Solve It. Apply It. Repeat.
                    </h3>

                    <p
                        className="
                            mt-2
                            max-w-[220px]
                            text-left
                            text-[14px]
                            leading-[1.45]
                            text-(--practice-section-card-text)
                        "
                    >
                        Every phase comes with something to solve, implement,
                        debug, or present, and someone reviews it afterward.
                    </p>
                </div>
                <div className="shrink-0 translate-y-20">
                    <LoopDiagram />
                </div>
            </div>

            <div className="mt-4 space-y-2">
                {mobileLoopBullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2">
                        
            <div
                className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-(--button-primary-bg)
                  text-white
                "
                >
                <span className="text-[12px] font-bold leading-none">✓</span>
            </div>
                        <p
                            className="
                                text-[13px]
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
