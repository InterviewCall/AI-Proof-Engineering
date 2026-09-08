import { Download, CalendarDays, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
const readinessCheckUrl = process.env.NEXT_PUBLIC_PRODUCT_READINESS_CHECK_URL;
import DownloadCurriculumButton from '@/components/Shared/DownloadCurriculumButton';
import BookTrackCounsellingButton from '@/components/Shared/BookTrackCounsellingButton';

const AlumniCtaBar: FC = () => {
    console.log("URL:", JSON.stringify(readinessCheckUrl));
    return (
        <div
            className="
                mt-6
                flex
                flex-col
                items-center
                gap-5
                rounded-2xl
                border
                border-(--alumni-cta-border)
                bg-(--alumni-cta-bg)
                px-6
                py-6
                text-center
                sm:flex-row
                sm:justify-between
                sm:text-left
            "
        >
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:text-left">
                <span
                    className="
                        hidden
                        h-13
                        w-13
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-(--alumni-cta-icon-bg)
                        text-(--alumni-cta-icon-text)
                        sm:flex
                    "
                >
                    <UsersRound
                        aria-hidden="true"
                        className="h-6.5 w-6.5"
                        strokeWidth={1.7}
                    />
                </span>

                <div>
                    <h3
                        className="
                            text-[18px]
                            font-bold
                            leading-tight
                            text-(--alumni-cta-title-text)
                        "
                    >
                        Explore More Verified Alumni Journeys
                    </h3>

                    <p
                        className="
                            mt-1.5
                            max-w-115
                            text-[14px]
                            leading-[1.5]
                            text-(--alumni-cta-text)
                        "
                    >
                        See how InterviewCall learners approached
                        skill-building, interview preparation, and their next
                        career step.
                    </p>
                </div>
            </div>

            {/* CTA */}
                
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
                    <DownloadCurriculumButton />

                    <BookTrackCounsellingButton />
                </div>
        </div>
    );
};

export default AlumniCtaBar;
