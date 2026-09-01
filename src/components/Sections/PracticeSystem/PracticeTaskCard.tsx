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

            <pre
                className="
                    mt-2
                    rounded-lg
                    bg-white
                    p-2.5
                    font-mono
                    text-[10px]
                    leading-[1.4]
                    text-(--practice-section-card-title)
                "
            >
                {task.codeLines.map((line, index) => (
                    <div key={index} className="flex gap-2.5">
                        <span className="w-3 shrink-0 text-right text-[#4a577b]">
                            {index + 1}
                        </span>
                        <span className="min-w-0 whitespace-pre-wrap break-words">
                            {line}
                        </span>
                    </div>
                ))}
            </pre>

            <div className="mt-2 flex justify-end gap-2">
                <button
                    type="button"
                    className="
                        min-h-8
                        px-3
                        cursor-pointer
                        rounded-lg
                        border
                        border-(--practice-section-card-border)
                        bg-white
                        text-[13px]
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
                        px-3
                        cursor-pointer
                        rounded-lg
                        bg-(--button-primary-bg)
                        text-[13px]
                        font-semibold
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
