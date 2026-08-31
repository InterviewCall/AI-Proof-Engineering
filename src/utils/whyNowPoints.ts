import { ComparisonPoint } from '@/types/whynow';

export const executionOnlyPoints: ComparisonPoint[] = [
    {
        text: 'Drafting boilerplate and repetitive code',
    },
    {
        text: 'Writing a first pass at tests',
    },
    {
        text: 'Explaining unfamiliar libraries and APIs',
    },
    {
        text: 'Suggesting fixes for common errors',
        hideOnMobile: true,
    },
    {
        text: 'Generating documentation from existing code',
        hideOnMobile: true,
    },
];

export const aiProofPoints: ComparisonPoint[] = [
    {
        text: 'Figuring out what a vague ticket actually means',
    },
    {
        text: 'Deciding how a service should be structured',
        hideOnMobile: true,
    },
    {
        text: "Debugging a failure nobody's seen before",
    },
    {
        text: 'Choosing between two reasonable trade-offs',
    },
    {
        text: 'Explaining a decision to someone questioning it',
        hideOnMobile: true,
    },
];
