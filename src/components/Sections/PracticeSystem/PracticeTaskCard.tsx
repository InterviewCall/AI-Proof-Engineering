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
                            text-[15px]
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
                            text-[11px]
                            font-semibold
                            text-(--practice-section-card-text)
                        "
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div
                className="
                    mt-2
                    flex
                    h-[100px]
                    w-[200px]
                    translate-x-10
                    overflow-hidden
                "
            >
                
                <Image
                        src="/image 114.svg"
                        alt="Practice task"
                        width={500}
                        height={400}
                        priority
                        className="
                            block
                            h-full
                            w-full
                            object-contain
                        "
                    />

            </div>

            <div className="mt-2 flex justify-end gap-2">
                <button
                    type="button"
                    className="
                        min-h-8
                        cursor-pointer
                        rounded-lg
                        border
                        border-(--practice-section-card-border)
                        bg-white
                        px-3
                        text-[12px]
                        font-semibold
                        whitespace-nowrap
                        text-(--practice-section-card-title)
                        transition-colors
                        hover:bg-(--practice-section-board-bg)
                    "
                >
                    View Problem
                </button>

                <button
                    type="button"
                    className="
                        min-h-8
                        cursor-pointer
                        rounded-lg
                        bg-(--button-primary-bg)
                        px-3
                        text-[12px]
                        font-semibold
                        whitespace-nowrap
                        text-(--button-primary-text)
                        transition-colors
                        hover:bg-(--button-primary-bg-hover)
                    "
                >
                    Submit
                </button>
            </div>
        </article>
    );
};

export default PracticeTaskCard;