import { Download } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const DownloadCurriculumButton: FC = () => {
    return (
        <Link
            href="#callback"
            className="
                group
                inline-flex
                min-h-12.5
                w-full
                items-center
                justify-center
                gap-3
                rounded-lg
                bg-(--faq-support-button-bg)
                px-6
                text-center
                text-[15px]
                font-semibold
                text-(--faq-support-button-text)
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-(--faq-support-button-hover-bg)
                focus-visible:outline-none
                focus-visible:ring-4
                focus-visible:ring-(--focus-ring-color)
            "
        >
            <Download
                aria-hidden="true"
                className="h-5 w-5"
                strokeWidth={1.8}
            />

            <span>Download Curriculum</span>
        </Link>
    );
};

export default DownloadCurriculumButton;