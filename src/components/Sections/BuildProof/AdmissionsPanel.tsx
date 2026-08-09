import { Check } from 'lucide-react';
import { FC } from 'react';

import { type ChipAccent } from '@/types/buildProof';
import { admissionInfoChips, allTracksInclude } from '@/utils/buildProofItems';

import BuildProofCtaButtons from './BuildProofCtaButtons';

const chipStyles: Record<ChipAccent, string> = {
    blue: 'bg-(--build-proof-chip-blue-bg) text-(--build-proof-chip-blue-icon)',
    green: 'bg-(--build-proof-chip-green-bg) text-(--build-proof-chip-green-icon)',
    purple:
        'bg-(--build-proof-chip-purple-bg) text-(--build-proof-chip-purple-icon)',
    orange:
        'bg-(--build-proof-chip-orange-bg) text-(--build-proof-chip-orange-icon)',
};

const AdmissionsPanel: FC = () => {
    return (
        <div
            className="
                flex
                h-full
                flex-col
                rounded-2xl
                border
                border-(--build-proof-enrollment-border)
                bg-(--build-proof-enrollment-bg)
                p-6
                sm:p-8
            "
        >
            <h3
                className="
                    text-[26px]
                    font-bold
                    leading-[1.2]
                    tracking-[-1%]
                    text-(--build-proof-enrollment-title)
                    sm:text-[28px]
                "
            >
                Admissions &amp; Fee Guidance
            </h3>

            <span className="mt-3 block h-1 w-11 rounded-full bg-(--color-blue)" />

            <p
                className="
                    mt-3
                    text-[15px]
                    leading-[1.55]
                    text-(--build-proof-enrollment-text)
                "
            >
                Get complete program details, latest fee plan, payment
                options, and track recommendation through a counselling call.
            </p>

            <div
                className="
                    mt-5
                    grid
                    grid-cols-2
                    gap-3
                    rounded-xl
                    border
                    border-(--build-proof-enrollment-border)
                    p-4
                    sm:grid-cols-4
                "
            >
                {admissionInfoChips.map((chip) => {
                    const Icon = chip.icon;

                    return (
                        <div
                            key={chip.label}
                            className="flex flex-col items-center gap-2 text-center"
                        >
                            <span
                                className={`
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-[10px]
                                    ${chipStyles[chip.accent]}
                                `}
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    strokeWidth={1.8}
                                />
                            </span>

                            <p
                                className="
                                    text-[12.5px]
                                    font-semibold
                                    leading-[1.35]
                                    text-(--build-proof-enrollment-title)
                                "
                            >
                                {chip.label}
                            </p>
                        </div>
                    );
                })}
            </div>

            <p
                className="
                    mt-6
                    text-[15px]
                    font-bold
                    text-(--build-proof-enrollment-title)
                "
            >
                All Tracks Include
            </p>

            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {allTracksInclude.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                        <span
                            className="
                                flex
                                h-6
                                w-6
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-(--build-proof-check-color)
                                text-white
                            "
                        >
                            <Check
                                aria-hidden="true"
                                className="h-3.5 w-3.5"
                                strokeWidth={3}
                            />
                        </span>

                        <p
                            className="
                                text-[14px]
                                font-medium
                                text-(--build-proof-enrollment-title)
                            "
                        >
                            {item}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-6">
                <BuildProofCtaButtons />
            </div>
        </div>
    );
};

export default AdmissionsPanel;
