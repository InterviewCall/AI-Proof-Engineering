import { FC } from 'react';

import { type FeedbackStatus } from '@/types/practiceSystem';
import { feedbackStatusLabel } from '@/utils/practiceSystemItems';

const statusStyles: Record<FeedbackStatus, string> = {
    'on-track':
        'bg-(--practice-section-success-bg) text-(--practice-section-success-text)',
    improving: 'bg-(--status-info-bg) text-(--status-info-text)',
    'needs-review':
        'bg-(--practice-section-warning-bg) text-(--practice-section-warning-text)',
    'ready-for-review':
        'bg-(--status-info-bg) text-(--status-info-text)',
};

const StatusPill: FC<{ status: FeedbackStatus }> = ({ status }) => {
    return (
        <span
            className={`
                inline-flex
                min-h-6
                shrink-0
                items-center
                rounded-full
                px-2.5
                text-[11px]
                font-semibold
                whitespace-nowrap
                ${statusStyles[status]}
            `}
        >
            {feedbackStatusLabel[status]}
        </span>
    );
};

export default StatusPill;
