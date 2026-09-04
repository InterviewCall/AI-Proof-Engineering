"use client";

import { FC } from "react";

import { type PracticeTabId } from "@/types/practiceSystem";
import { practiceTabs } from "@/utils/practiceSystemItems";

type MobilePracticeTabsProps = {
    activeTab: PracticeTabId;
    onTabChange: (tabId: PracticeTabId) => void;
};

const MobilePracticeTabs: FC<MobilePracticeTabsProps> = ({
    activeTab,
    onTabChange,
}) => {
    return (
        <div
            role="tablist"
            aria-label="Practice system categories"
            className="flex items-stretch overflow-hidden rounded-2xl border border-(--practice-section-board-border) bg-white"
        >
            {practiceTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;

                return (
                    <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onTabChange(tab.id)}
                        className={`
                            flex
                            min-h-20
                            flex-1
                            shrink-0
                            cursor-pointer
                            flex-col
                            items-center
                            justify-center
                            gap-1
                            px-2
                            text-[12px]
                            font-semibold
                            whitespace-nowrap
                            transition-colors
                            ${
                                tab.id !== "reviews"
                                    ? "border-r border-(--practice-section-board-border)"
                                    : ""
                            }
                            ${
                                isActive
                                    ? "text-(--color-brand-700)"
                                    : "text-black"
                            }
                        `}
                    >
                        <Icon
                            aria-hidden="true"
                            className="h-8 w-8 text-current"
                            strokeWidth={1.9}
                        />
                        <span>{tab.label}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default MobilePracticeTabs;