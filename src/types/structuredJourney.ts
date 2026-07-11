import { type LucideIcon } from 'lucide-react';

export type PhaseId =
    | '01'
    | '02'
    | '03'
    | '04'
    | '05'
    | '06'
    | '07'
    | '08'
    | '09'
    | '10';

export type PhaseCard = {
    title: string;
    icon: LucideIcon;
    iconBoxClass?: string;
    iconClass?: string;
    points: string[];
};

export type JourneyPhase = {
    id: PhaseId;
    title: string;
    duration: string;
    description: string;
    cards: PhaseCard[];
    mobileCards: PhaseCard[];
};

export type JourneyStat = {
    title: string;
    subtitle: string;
    icon: LucideIcon | null;
    value?: string;
    colorClass: string;
};

export type PhaseDetailProps = {
    phase: JourneyPhase;
    mobile?: boolean;
};
