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
            "A program for software engineers that covers fundamentals, AI-assisted workflows, system design, and a capstone project you build and defend. It's split into three tracks based on experience.",
        icon: BookOpen,
    },
    {
        question: 'Is this designed for working professionals?',
        answer:
            "Yes — most people join while working full-time. We'll publish the expected weekly time commitment before enrollment opens.",
        icon: UsersRound,
    },
    {
        question: 'How are Foundation, Growth, and Leadership different?',
        answer:
            'Foundation is for 0–2 years of experience and focuses on fundamentals. Growth is for 2–5 years and goes deeper into system design and AI workflows. Leadership is for 5+ years and focuses on architecture, trade-offs, and senior-level interviews.',
        icon: Network,
    },
    {
        question:
            "Does using AI in the program mean I'll end up depending on it?",
        answer:
            "Phase 3 has you use AI to draft and debug code, but every output gets reviewed and tested before it counts, so the habit of checking your own work stays intact.",
        icon: Sparkles,
    },
    {
        question: 'What practice, mocks, and reviews are included?',
        answer:
            "Problem sets, debugging exercises, system design labs, and AI-workflow exercises, each with mentor feedback. Mock interviews cover DSA, machine coding, and system design. Your capstone gets reviewed before it's considered done.",
        icon: ClipboardCheck,
    },
    {
        question: 'What will I actually walk away with?',
        answer:
            'A repository, an architecture write-up, a recorded walkthrough, and documentation, built around a direction that fits your track — a backend system, an AI workflow project, or a system design case study, for example.',
        icon: Trophy,
    },
    {
        question: 'How do admissions and fee counselling work?',
        answer:
            "Book a call. Someone on the team goes over the track that fits you, the current fee plan, and payment options. We'll confirm whether enrollment runs continuously or in cohorts before you enroll.",
        icon: IndianRupee,
    },
];

export const mobileFaqItems: FaqItem[] = [
    {
        question: 'What is the AI-Proof Engineer Program?',
        answer:
            "A program covering fundamentals, AI-assisted workflows, system design, and a capstone you build and defend. It's split into three tracks by experience.",
        icon: BookOpen,
    },
    {
        question: 'Is this program for working professionals?',
        answer:
            "Yes — most people join while working full-time. We'll publish the expected weekly time commitment before enrollment opens.",
        icon: UsersRound,
    },
    {
        question: 'How are the tracks different?',
        answer:
            'Foundation is for 0–2 YOE, Growth for 2–5 YOE, and Leadership for 5+ YOE, moving from fundamentals to architecture and senior-level interviews.',
        icon: Network,
    },
    {
        question: 'What practice, mocks, and reviews are included?',
        answer:
            'Problem sets, labs, and AI-workflow exercises with mentor feedback, plus mock interviews across DSA, machine coding, and system design.',
        icon: ClipboardCheck,
    },
    {
        question: 'How does admissions and fee counselling work?',
        answer:
            "Book a call. Someone on the team goes over your track, the current fee plan, and payment options.",
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
