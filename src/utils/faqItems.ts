import {
    BookOpen,
    CalendarCheck,
    CircleCheck,
    ClipboardCheck,
    Code2,
    FileText,
    IndianRupee,
    Mail,
    MessageCircle,
    Network,
    ShieldCheck,
    Sparkles,
    Trophy,
    UsersRound,
} from 'lucide-react';

import {
    type FaqItem,
    type FaqSupportOption,
    type FaqTrustPoint,
} from '@/types/faq';

export const faqItems: FaqItem[] = [
    {
        question: 'What is the AI-Proof Engineer Program?',
        answer:
            'It is a structured engineering-readiness program designed to help software engineers build stronger fundamentals, AI-assisted workflows, system design depth, interview readiness, and portfolio-backed proof through a 10-phase curriculum.',
        icon: BookOpen,
    },
    {
        question: 'Is this program designed for working professionals?',
        answer:
            'Yes. Live sessions, labs, and mentor reviews are scheduled around working hours, and every session is recorded for later access.',
        icon: UsersRound,
    },
    {
        question:
            'How are the Foundation, Growth, and Leadership tracks different?',
        answer:
            'Foundation is built for 0-2 YOE engineers, Growth for 2-5 YOE engineers, and Leadership for 5+ YOE engineers preparing for senior-level expectations.',
        icon: Network,
    },
    {
        question:
            'How are AI workflows taught without making learners dependent on AI?',
        answer:
            'Every AI-assisted task includes review, debugging, and judgment checkpoints, so learners practice directing and verifying AI output rather than accepting it blindly.',
        icon: Sparkles,
    },
    {
        question: 'What kind of practice, mocks, and reviews are included?',
        answer:
            'Structured assignments, mock interviews, mentor code reviews, and readiness checklists run throughout the program, not just at the end.',
        icon: ClipboardCheck,
    },
    {
        question: 'What capstone proof will I build?',
        answer:
            'A portfolio-ready capstone project with source code, architecture documentation, a demo walkthrough, and mentor-reviewed improvement notes.',
        icon: Trophy,
    },
    {
        question: 'How does admissions and fee counselling work?',
        answer:
            'A counselling call walks you through track recommendations, the latest fee plan, payment options, and enrollment terms before you commit.',
        icon: IndianRupee,
    },
];

export const mobileFaqItems: FaqItem[] = [
    {
        question: 'What is the AI-Proof Engineer Program?',
        answer:
            'A structured engineering-readiness program covering fundamentals, AI workflows, system design, mocks, reviews, and capstone proof.',
        icon: BookOpen,
    },
    {
        question: 'Is this program designed for working professionals?',
        answer:
            'Yes. Live sessions, labs, and mentor reviews are scheduled around working hours, and every session is recorded for later access.',
        icon: UsersRound,
    },
    {
        question:
            'How are the Foundation, Growth, and Leadership tracks different?',
        answer:
            'Foundation is built for 0-2 YOE engineers, Growth for 2-5 YOE engineers, and Leadership for 5+ YOE engineers preparing for senior-level expectations.',
        icon: Network,
    },
    {
        question: 'What practice, mocks, and reviews are included?',
        answer:
            'Structured assignments, mock interviews, mentor code reviews, and readiness checklists run throughout the program.',
        icon: ClipboardCheck,
    },
    {
        question: 'How does admissions and fee counselling work?',
        answer:
            'A counselling call walks you through track recommendations, the latest fee plan, payment options, and enrollment terms.',
        icon: IndianRupee,
    },
];

export const faqSupportOptions: FaqSupportOption[] = [
    {
        title: 'Book a Counselling Call',
        description: 'Get guidance on the right track for your experience level.',
        icon: CalendarCheck,
    },
    {
        title: 'Talk to an Advisor',
        description:
            'Ask questions about curriculum, learning support, and admissions.',
        icon: MessageCircle,
    },
    {
        title: 'Download Curriculum',
        description: 'Explore the full 10-phase curriculum structure.',
        icon: FileText,
    },
    {
        title: 'Email Admissions',
        description: 'Our team replies during working hours.',
        icon: Mail,
    },
];

export const faqTrustPoints: FaqTrustPoint[] = [
    {
        label: 'Structured Program',
        icon: CircleCheck,
    },
    {
        label: 'Mentor-Led Reviews',
        icon: UsersRound,
    },
    {
        label: 'Practice + Proof',
        icon: Code2,
    },
    {
        label: 'Career Readiness',
        icon: ShieldCheck,
    },
];
