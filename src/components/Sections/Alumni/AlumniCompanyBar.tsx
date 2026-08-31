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

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {alumniCompanies.map((company) => (
                    <div
                        key={company.name}
                        className="relative h-7 w-24 sm:h-8 sm:w-28"
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
