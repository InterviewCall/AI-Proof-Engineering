import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { mobileEcosystemItems } from '@/utils/ecosystemItems';

import MobileEcosystemListItem from './MobileEcosystemListItem';

const MobileEcosystemPanel: FC = () => {
    return (
        <div
            className="
                rounded-2xl
                border
                border-(--ecosystem-community-border)
                bg-(--ecosystem-community-bg)
                p-5
                sm:p-7
            "
        >
            <h3
                className="
                    text-[22px]
                    font-bold
                    leading-tight
                    tracking-[-1%]
                    text-(--ecosystem-community-title)
                "
            >
                InterviewCall Ecosystem
            </h3>

            <span className="mt-3 block h-1 w-11 rounded-full bg-(--color-blue)" />

            <p
                className="
                    mt-3
                    text-[14px]
                    leading-[1.5]
                    text-(--ecosystem-community-text)
                "
            >
                A support layer built around learning, practice, feedback,
                proof, and career readiness.
            </p>

            <div className="mt-5">
                {mobileEcosystemItems.map((item, index) => (
                    <MobileEcosystemListItem
                        key={item.label}
                        item={item}
                        isLast={index === mobileEcosystemItems.length - 1}
                    />
                ))}
            </div>

            <Link
                href="#ecosystem"
                className="
                    group
                    mt-5
                    inline-flex
                    min-h-14
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-lg
                    bg-(--ecosystem-community-button-bg)
                    px-6
                    text-center
                    text-[15px]
                    font-semibold
                    text-(--ecosystem-community-button-text)
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-(--ecosystem-community-button-hover-bg)
                    focus-visible:outline-none
                    focus-visible:ring-4
                    focus-visible:ring-(--focus-ring-color)
                "
            >
                <span>Explore the Ecosystem</span>

                <ArrowRight
                    aria-hidden="true"
                    className="
                        h-5
                        w-5
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                    "
                    strokeWidth={1.9}
                />
            </Link>
        </div>
    );
};

export default MobileEcosystemPanel;
