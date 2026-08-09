import { FC } from 'react';

import { advantagePoints } from '@/utils/capstoneProofItems';

const CapstoneAdvantagePanel: FC = () => {
    return (
        <div>
            <span
                className="
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-[0.04em]
                    text-(--proof-section-eyebrow-text)
                "
            >
                The Capstone Advantage
            </span>

            <h3
                className="
                    mt-3
                    text-[26px]
                    font-bold
                    leading-[1.2]
                    tracking-[-1%]
                    text-(--proof-section-title-text)
                "
            >
                From Learning to Interview-Ready Proof
            </h3>

            <p
                className="
                    mt-3
                    text-[15px]
                    leading-[1.55]
                    text-(--proof-section-subtitle-text)
                "
            >
                Capstones help learners convert skills into visible proof:
                code, architecture, tradeoffs, documentation, demo
                walkthroughs, and mentor-reviewed improvements.
            </p>

            <div className="mt-6 space-y-4 border-t border-(--proof-section-card-border) pt-6">
                {advantagePoints.map((point) => (
                    <p
                        key={point}
                        className="
                            text-[15px]
                            font-semibold
                            leading-tight
                            text-(--proof-section-card-title)
                        "
                    >
                        {point}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CapstoneAdvantagePanel;
