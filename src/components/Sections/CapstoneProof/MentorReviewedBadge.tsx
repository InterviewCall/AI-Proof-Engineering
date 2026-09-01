import { Check } from 'lucide-react';
import { FC } from 'react';

const MentorReviewedBadge: FC = () => {
    return (
        <div
            className="
                flex
                h-16
                w-16
                shrink-0
                flex-col
                items-center
                justify-center
                gap-0.5
                rounded-full
                border-2
                border-dotted
                border-(--color-brand-300)
                bg-(--color-brand-50)
                text-center
            "
        >
            <span
                className="
                    text-[7px]
                    font-bold
                    uppercase
                    leading-none
                    tracking-[0.05em]
                    text-(--color-brand-500)
                "
            >
                Mentor
            </span>

            <Check
                aria-hidden="true"
                className="h-4 w-4 text-(--color-brand-600)"
                strokeWidth={2.5}
            />

            <span
                className="
                    text-[7px]
                    font-bold
                    uppercase
                    leading-none
                    tracking-[0.05em]
                    text-(--color-brand-500)
                "
            >
                Reviewed
            </span>
        </div>
    );
};

export default MentorReviewedBadge;