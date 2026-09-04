import { FC } from 'react';

import { practiceTabs } from '@/utils/practiceSystemItems';

const PracticeTabs: FC = () => {
    return (
        <div
            aria-label="Practice system categories"
            className="
                flex
                items-stretch
                overflow-hidden
                rounded-t-2xl
                border
                border-(--practice-section-board-border)
                bg-(--practice-section-board-bg)
                p-2
                sm:p-3
            "
        >
            {practiceTabs.map((tab, index) => {
                const Icon = tab.icon;
                const isLast = index === practiceTabs.length - 1;

                return (
                    <div
                        key={tab.id}
                        className="
                            flex
                            min-h-12
                            flex-1
                            items-center
                            justify-center
                            sm:min-h-14
                        "
                    >
                        <div
                            className={`
                                flex
                                h-full
                                w-full
                                items-center
                                justify-center
                                gap-2
                                px-4
                                text-[18px]
                                font-bold
                                whitespace-nowrap
                                text-black
                                sm:text-[16px]
                                ${!isLast ? 'border-r border-(--practice-section-board-border)' : ''}
                            `}
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-8 w-8"
                                strokeWidth={1.8}
                            />

                            <span>{tab.label}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PracticeTabs;