import { type LucideIcon } from 'lucide-react';

export type FaqItem = {
    question: string;
    answer: string;
    icon: LucideIcon;
};

export type FaqSupportOption = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export type FaqTrustPoint = {
    label: string;
    icon: LucideIcon;
};
