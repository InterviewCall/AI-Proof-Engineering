import { CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
const readinessCheckUrl = process.env.NEXT_PUBLIC_PRODUCT_READINESS_CHECK_URL;

type BookTrackCounsellingButtonProps = {
    readinessCheckUrl?: string | null;
};

const BookTrackCounsellingButton: FC<BookTrackCounsellingButtonProps> = ({
    readinessCheckUrl,
}) => {
    return (
        <Link
            href={readinessCheckUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex
                min-h-12.5
                w-full
                items-center
                justify-center
                gap-3
                rounded-lg
                border
                border-(--color-brand-300)
                bg-white
                px-6
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
            <CalendarDays
                aria-hidden="true"
                className="h-5 w-5"
                strokeWidth={1.9}
            />

            <span>Book a Track Counselling Call</span>
        </Link>
    );
};

export default BookTrackCounsellingButton;