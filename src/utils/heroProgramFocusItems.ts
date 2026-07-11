import {
    ChartNoAxesCombined,
    Cpu,
    type LucideIcon,
    Network,
    ShieldCheck,
} from 'lucide-react';

export interface ProgramFocusItem {
    label: string;
    icon: LucideIcon;
}

export const programFocusItems: ProgramFocusItem[] = [
    {
        label: 'AI-Proof Engineer',
        icon: ShieldCheck,
    },
    {
        label: 'System Design',
        icon: Network,
    },
    {
        label: 'AI-Assisted Engineering',
        icon: Cpu,
    },
    {
        label: 'Interview Readiness',
        icon: ChartNoAxesCombined,
    },
];
