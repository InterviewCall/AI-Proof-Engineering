import Image from 'next/image';
import { FC } from 'react';

import { alumniCompanies } from '@/utils/alumniItems';

const AlumniCompanyBar: FC = () => {
    return (
        <div
            className="
                mt-6
                rounded-2xl
                border
                border-(--alumni-companies-border)
                bg-(--alumni-companies-bg)
                px-6
                py-8
                text-center
                sm:px-10
            "
        >
            <h3
                className="
                    text-[18px]
                    font-bold
                    leading-tight
                    text-(--alumni-companies-title-text)
                "
            >
                Where InterviewCall alumni are building their careers
            </h3>

            <div
                className="
                    mt-6
                    flex
                    items-center
                    gap-x-8
                    overflow-x-auto
                    px-1
                    pb-2
                    [scrollbar-width:thin]
                    sm:flex-wrap
                    sm:justify-center
                    sm:gap-x-10
                    sm:gap-y-6
                    sm:overflow-visible
                    sm:pb-0
                    [&::-webkit-scrollbar]:h-1
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-(--alumni-companies-border)
                "
            >
                {alumniCompanies.map((company) => (
                    <div
                        key={company.name}
                        className="relative h-7 w-24 shrink-0 sm:h-8 sm:w-28"
                    >
                        <Image
                            src={company.logo}
                            alt={company.name}
                            fill
                            sizes="112px"
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            <p
                className="
                    mt-6
                    text-[12.5px]
                    text-(--alumni-companies-caption-text)
                "
            >
                * Company names represent verified alumni outcomes shared
                with consent.
            </p>
        </div>
    );
};

export default AlumniCompanyBar;