import { NavigationItem } from '@/types/navbar';

export const navigationItems: NavigationItem[] = [
    {
        label: 'Program',
        children: [
            {
                label: 'Why This Program',
                href: '#why-now',
            },
            {
                label: 'Program Structure',
                href: '#program',
            },
            {
                label: 'Learning Journey',
                href: '#alumni',
            },
        ],
    },
    {
        label: 'Curriculum',
        href: '#curriculum',
    },
    {
        label: 'Projects',
        href: '#projects',
    },
    {
        label: 'Mentors',
        href: '#specialists',
    },
    {
        label: 'Outcomes',
        href: '#outcomes',
    },
    {
        label: 'Resources',
        children: [
            {
                label: 'Career Insights',
                href: '#career-insights',
            },
            {
                label: 'Learning Ecosystem',
                href: '#ecosystem',
            },
            {
                label: 'Frequently Asked Questions',
                href: '#faq',
            },
        ],
    },
    // {
    //     label: 'About us',
    //     href: '#about',
    // },
];
