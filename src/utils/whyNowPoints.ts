import { ComparisonPoint } from '@/types/whynow';

export const executionOnlyPoints: ComparisonPoint[] = [
    {
        text: 'Writes code from tickets',
    },
    {
        text: 'Relies on AI output without review',
    },
    {
        text: 'Struggles to explain system tradeoffs',
    },
    {
        text: 'Has weak interview communication',
        hideOnMobile: true,
    },
    {
        text: 'Has limited proof beyond work experience',
        hideOnMobile: true,
    },
];

export const aiProofPoints: ComparisonPoint[] = [
    {
        text: 'Understands product and engineering context',
        hideOnMobile: true,
    },
    {
        text: 'Uses AI to move faster, not think less',
    },
    {
        text: 'Designs systems and explains tradeoffs',
    },
    {
        text: 'Handles DSA, machine coding, and system design',
        hideOnMobile: true,
    },
    {
        text: 'Builds interview-ready proof of skill',
    },
];
