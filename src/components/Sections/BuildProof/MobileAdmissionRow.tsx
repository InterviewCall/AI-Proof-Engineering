import { FC } from 'react';

import { type AdmissionInfoChip, type ChipAccent } from '@/types/buildProof';

const iconStyles: Record<ChipAccent, string> = {
    blue: 'bg-(--build-proof-chip-blue-bg) text-(--build-proof-chip-blue-icon)',
    green: 'bg-(--build-proof-chip-green-bg) text-(--build-proof-chip-green-icon)',
    purple:
        'bg-(--build-proof-chip-purple-bg) text-(--build-proof-chip-purple-icon)',
    orange:
        'bg-(--build-proof-chip-orange-bg) text-(--build-proof-chip-orange-icon)',
};

const MobileAdmissionRow: FC<{ chip: AdmissionInfoChip }> = ({ chip }) => {
    const Icon = chip.icon;

    return (
        <div
            className="
                flex
                items-center
                gap-3.5
                rounded-xl
                border
                border-(--build-proof-enrollment-border)
                p-3.5
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
                    rounded-[10px]
                    ${iconStyles[chip.accent]}
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
                    flex-1
                    text-[14px]
                    font-semibold
                    text-(--build-proof-enrollment-title)
                "
            >
                {chip.label}
            </p>
        </div>
    );
};

export default MobileAdmissionRow;