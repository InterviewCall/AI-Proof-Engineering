import { CalendarCheck, CircleArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const BuildProofCtaButtons: FC = () => {
    return (
        <div className="flex flex-col gap-3">
            <Link
                href="#callback"
                className="
                    group
                    inline-flex
                    min-h-14
                    items-center
                    justify-center
                    gap-3
                    rounded-lg
                    bg-(--build-proof-button-bg)
                    px-5
                    text-center
                    text-[15px]
                    font-semibold
                    text-(--build-proof-button-text)
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-(--build-proof-button-hover-bg)
                    focus-visible:outline-none
                    focus-visible:ring-4
                    focus-visible:ring-(--focus-ring-color)
                "
            >
                <CalendarCheck
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={1.9}
                />
                <span>Book a Program Counselling Call</span>

                <CircleArrowRight
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

            <a
                href="/documents/ai-engineering-curriculum.pdf"
                download
                className="
                    inline-flex
                    min-h-14
                    items-center
                    justify-center
                    gap-3
                    rounded-lg
                    border
                    border-(--color-brand-300)
                    bg-white
                    px-5
                    text-center
                    text-[15px]
                    font-semibold
                    text-(--color-brand-700)
                    transition-colors
                    hover:bg-(--color-brand-50)
                    focus-visible:outline-none
                    focus-visible:ring-4
                    focus-visible:ring-(--focus-ring-color)
                "
            >
                <Download aria-hidden="true" className="h-5 w-5" strokeWidth={1.9} />
                <span>Download Curriculum</span>
            </a>
        </div>
    );
};

export default BuildProofCtaButtons;
