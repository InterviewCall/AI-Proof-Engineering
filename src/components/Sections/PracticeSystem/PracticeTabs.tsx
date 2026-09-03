import { FC } from 'react';

import { type PracticeTabId } from '@/types/practiceSystem';
import { practiceTabs } from '@/utils/practiceSystemItems';

type PracticeTabsProps = {
    activeTabId: PracticeTabId;
    onChange: (tabId: PracticeTabId) => void;
};

const PracticeTabs: FC<PracticeTabsProps> = ({ activeTabId, onChange }) => {
    return (
        <div
            role="tablist"
            aria-label="Practice system categories"
            className="
                flex
                items-stretch
                overflow-x-auto
                rounded-t-2xl
                border
                border-(--practice-section-board-border)
                bg-(--practice-section-board-bg)
                p-2
                sm:p-3
            "
        >
            {practiceTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.id === activeTabId;

                return (
                    <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onChange(tab.id)}
                        className={`
                            flex
                            min-h-12
                            flex-1
                            shrink-0
                            cursor-pointer
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            px-4
                            text-[18px]
                            font-bold
                            whitespace-nowrap
                            transition-colors
                            sm:min-h-14
                            sm:text-[16px]
                            ${
                                isActive
                                    ? 'bg-(--practice-section-tab-active-bg) text-(--practice-section-tab-active-text)'
                                    : 'text-black hover:bg-white'
                            }
                        `}
                    >
                        <Icon
                            aria-hidden="true"
                            className="h-8 w-8"
                            strokeWidth={1.8}
                        />
                        <span>{tab.label}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default PracticeTabs;
