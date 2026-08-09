import Image from 'next/image';
import { FC } from 'react';

const ProgramOverviewPanel: FC = () => {
    return (
        <div
            className="
                relative
                isolate
                overflow-hidden
                rounded-2xl
                border
                border-(--program-glance-main-card-border)
                bg-(--program-glance-main-card-bg)
                p-6
                sm:p-8
            "
        >
            <Image
                src="/images/optimized-svg/program-glance-section-left-image.svg"
                alt=""
                fill
                aria-hidden="true"
                sizes="(max-width: 1024px) 100vw, 700px"
                className="-z-10 object-cover"
            />

            <h3
                className="
                    max-w-90
                    text-[26px]
                    font-bold
                    leading-[1.2]
                    tracking-[-1%]
                    text-(--program-glance-main-card-title)
                    sm:text-[30px]
                "
            >
                AI-Proof Engineer Program
            </h3>

            <p
                className="
                    mt-3
                    max-w-90
                    text-[16px]
                    font-semibold
                    leading-[1.4]
                    text-(--program-glance-main-card-highlight)
                "
            >
                Built around skills, practice, feedback, and proof.
            </p>

            <span
                className="
                    mt-3
                    block
                    h-1
                    w-11
                    rounded-full
                    bg-(--program-glance-main-card-highlight)
                "
            />

            <p
                className="
                    mt-3
                    max-w-80
                    text-[14px]
                    leading-[1.6]
                    text-(--program-glance-main-card-text)
                "
            >
                Move through a structured system that combines fundamentals,
                AI-assisted engineering, system design mocks, reviews, and
                capstone work.
            </p>
        </div>
    );
};

export default ProgramOverviewPanel;
