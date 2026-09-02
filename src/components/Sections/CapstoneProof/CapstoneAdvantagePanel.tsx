import { Check } from 'lucide-react';
import { FC } from 'react';

import { advantagePoints } from '@/utils/capstoneProofItems';

const CapstoneAdvantagePanel: FC = () => {
    return (
        <div
            className="
<<<<<<< HEAD
                self-start
                rounded-xl
                border
                border-(--proof-section-card-border)
                bg-(--proof-section-card-bg)
                px-5
                py-5
                sm:px-6
                sm:py-6
=======
                w-full
                max-w-[382px]
                rounded-[17px]
                border
                border-[#DCE5F6]
                bg-[#FFFEFD]
                p-6
>>>>>>> 8d136ea8a0d66a671ecfc8a8818d944007280aae
            "
        >
            <span
                className="
                    text-[11px]
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
                    mt-4
                    text-[21px]
                    font-bold
                    leading-[1.08]
                    tracking-[-0.02em]
                    text-(--proof-section-title-text)
                "
            >
                From Learning to
                <br />
                Interview-Ready Proof
            </h3>

            <p
                className="
                    mt-4
                    text-[12px]
                    leading-[1.45]
                    text-(--proof-section-subtitle-text)
                "
            >
                Capstones help learners convert
                skills into visible proof: code,
                architecture, tradeoffs,
                documentation, demo walkthroughs,
                and mentor-reviewed improvements.
            </p>

            <div
                className="
                    mt-5
                    border-t
                    border-(--proof-section-card-border)
                "
            >
                {advantagePoints.map((point) => (
                    <div
                        key={point}
                        className="
                            flex
                            items-start
                            gap-2.5
                            border-b
                            border-(--proof-section-card-border)
                            py-3
                            last:border-b-0
                        "
                    >
                        <span
                            className="
                                mt-0.5
                                flex
                                h-4
                                w-4
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-(--proof-section-blue-bg)
                                text-(--proof-section-blue-text)
                            "
                        >
                            <Check
                                aria-hidden="true"
                                className="h-3 w-3"
                                strokeWidth={3}
                            />
                        </span>

                        <p
                            className="
                                text-[11px]
                                font-semibold
                                leading-[1.25]
                                text-(--proof-section-card-title)
                            "
                        >
                            {point}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CapstoneAdvantagePanel;