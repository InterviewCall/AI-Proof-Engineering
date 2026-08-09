import { ArrowRight, MessageCircle, UserRound } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const MentorReviewCard: FC = () => {
    return (
        <article
            className="
                flex
                h-full
                flex-col
                rounded-2xl
                border
                border-(--practice-section-card-border)
                bg-(--practice-section-card-bg)
                p-5
            "
        >
            <div className="flex items-center gap-2">
                <UserRound
                    aria-hidden="true"
                    className="h-5 w-5 text-(--color-brand-700)"
                    strokeWidth={1.9}
                />

                <h3
                    className="
                        text-[15px]
                        font-semibold
                        text-(--practice-section-card-title)
                    "
                >
                    Mentor Review
                </h3>
            </div>

            <div
                className="
                    mt-4
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    bg-(--color-yellow-soft)
                    p-4
                "
            >
                <span
                    className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-(--color-navy-1000)
                        text-white
                    "
                >
                    <MessageCircle
                        aria-hidden="true"
                        className="h-4.5 w-4.5"
                        strokeWidth={1.9}
                    />
                </span>

                <p
                    className="
                        text-[14px]
                        leading-[1.5]
                        text-(--practice-section-card-title)
                    "
                >
                    Structured feedback from your mentor to strengthen your
                    approach, code quality, and system thinking.
                </p>
            </div>

            <Link
                href="#specialists"
                className="
                    group
                    mt-4
                    inline-flex
                    items-center
                    gap-1.5
                    text-[13px]
                    font-semibold
                    text-(--color-brand-700)
                "
            >
                <span>View Review Notes</span>
                <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={2}
                />
            </Link>
        </article>
    );
};

export default MentorReviewCard;
