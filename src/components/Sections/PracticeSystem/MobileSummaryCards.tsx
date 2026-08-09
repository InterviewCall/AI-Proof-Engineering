import { Code2, MessageCircle, Mic } from 'lucide-react';
import { FC } from 'react';

const summaryCards = [
    {
        title: 'Practice Task',
        description: 'Structured coding and system prompts',
        icon: Code2,
    },
    {
        title: 'Mock Feedback',
        description: 'Communication, approach, and code quality',
        icon: Mic,
    },
    {
        title: 'Mentor Review',
        description: 'Specific feedback to improve',
        icon: MessageCircle,
    },
];

const MobileSummaryCards: FC = () => {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {summaryCards.map((card) => {
                const Icon = card.icon;

                return (
                    <article
                        key={card.title}
                        className="
                            rounded-xl
                            border
                            border-(--practice-section-card-border)
                            bg-(--practice-section-card-bg)
                            p-5
                            text-center
                        "
                    >
                        <span
                            className="
                                mx-auto
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-[10px]
                                bg-(--practice-section-board-bg)
                                text-(--color-brand-700)
                            "
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-5.5 w-5.5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <h3
                            className="
                                mt-3
                                text-[15px]
                                font-semibold
                                text-(--practice-section-card-title)
                            "
                        >
                            {card.title}
                        </h3>

                        <span
                            aria-hidden="true"
                            className="mx-auto mt-1.5 block h-0.5 w-6 bg-(--color-brand-700)"
                        />

                        <p
                            className="
                                mt-2
                                text-[13px]
                                leading-[1.4]
                                text-(--practice-section-card-text)
                            "
                        >
                            {card.description}
                        </p>
                    </article>
                );
            })}
        </div>
    );
};

export default MobileSummaryCards;
