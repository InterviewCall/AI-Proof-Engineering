import Image from 'next/image';
import { FC } from 'react';

const MobileProgramOverviewPanel: FC = () => {
    return (
        <div
            className="
                relative
                isolate
                aspect-[800/434]
                overflow-hidden
                rounded-2xl
                border
                border-(--program-glance-main-card-border)
                bg-(--program-glance-main-card-bg)
                p-5
                sm:p-7
            "
        >
            <Image
                src="/images/optimized-svg/program-glance-section-mobile-view-image.svg"
                alt=""
                fill
                aria-hidden="true"
                sizes="100vw"
                className="-z-10 object-cover"
            />

            <h3
                className="
                    max-w-70
                    text-[22px]
                    font-bold
                    leading-[1.2]
                    tracking-[-1%]
                    whitespace-nowrap
                    text-(--program-glance-main-card-title)
                "
            >
                AI-Proof Engineer Program
            </h3>

            <p
                className="
                    mt-0.5
                    text-[10px]
                    font-medium
                    leading-[1.8]
                    tracking-[-2%]
                    text-[#46D2FD]
                "
            >
                Skills. Practice Feedback. Proof.
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

          { /*  <p
                className="
                    mt-3
                    max-w-70
                    text-[12px]
                    font-semibold
                    leading-[1.5]
                    text-(--program-glance-main-card-highlight)
                "
            >
                Curriculum{' '}
                <span className="text-(--program-glance-main-card-text)">
                    →
                </span>{' '}
                Practice{' '}
                <span className="text-(--program-glance-main-card-text)">
                    →
                </span>{' '}
                Mocks{' '}
                <span className="text-(--program-glance-main-card-text)">
                    →
                </span>{' '}
                Capstone
            </p>  */}
        </div>
    );
};  

export default MobileProgramOverviewPanel;
