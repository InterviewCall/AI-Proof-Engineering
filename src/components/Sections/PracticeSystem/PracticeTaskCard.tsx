import Image from 'next/image';
import { Code2 } from 'lucide-react';
import { FC } from 'react';

import { type PracticeTaskContent } from '@/types/practiceSystem';

const PracticeTaskCard: FC<{ task: PracticeTaskContent }> = ({ task }) => {
    return (
        <article
            className="
                flex
                flex-col
                rounded-2xl
                border
                border-(--practice-section-card-border)
                bg-(--practice-section-card-bg)
                p-4
            "
        >
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <Code2
                        aria-hidden="true"
                        className="h-5 w-5 text-(--color-brand-700)"
                        strokeWidth={1.9}
                    />

                    <h3
                        className="
                            text-[16px]
                            font-semibold
                            text-(--practice-section-card-title)
                        "
                    >
                        Practice Task
                    </h3>
                </div>

                <span
                    className="
                        inline-flex
                        min-h-6
                        items-center
                        rounded-full
                        bg-(--practice-section-tab-active-bg)
                        px-2.5
                        text-[11px]
                        font-semibold
                        text-(--color-brand-700)
                    "
                >
                    {task.tag}
                </span>
            </div>

            <h4
                className="
                    mt-2
                    text-[16px]
                    font-semibold
                    leading-tight
                    text-(--practice-section-card-title)
                "
            >
                {task.title}
            </h4>

            <div className="mt-2 flex flex-wrap gap-2">
                {task.tags.map((tag) => (
                    <span
                        key={tag}
                        className="
                            inline-flex
                            min-h-6
                            items-center
                            rounded-full
                            bg-(--practice-section-progress-track)
                            px-2.5
                            text-[12px]
                            font-semibold
                            text-(--practice-section-card-text)
                        "
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Enlarged code preview */}
            <div
                className="
                    mt-4
                    flex
                    min-h-[190px]
                    w-full
                    flex-1
                    self-center
                    overflow-hidden
                    rounded-lg
                "
            >
                <Image
                    src="/image 114.svg"
                    alt="Practice task"
                    width={500}
                    height={190}
                    priority
                    className="
                        block
                        h-full
                        min-h-[190px]
                        w-full
                        object-fill
                    "
                />
            </div>
        </article>
    );
};

export default PracticeTaskCard;