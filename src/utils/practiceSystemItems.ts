import {
    Bug,
    ClipboardCheck,
    Code2,
    Compass,
    FlaskConical,
    LineChart,
    Mic,
    Network,
    Sparkles,
    Star,
    Target,
    Terminal,
    UserCheck,
} from 'lucide-react';

import {
    type ChecklistItem,
    type FeatureStripItem,
    type FeedbackMetric,
    type LoopBullet,
    type PracticeTab,
    type PracticeTabId,
    type PracticeTaskContent,
    type ReadinessMetric,
} from '@/types/practiceSystem';

export const practiceTabs: PracticeTab[] = [
    { id: 'practice', label: 'Practice', icon: Code2 },
    { id: 'labs', label: 'Labs', icon: FlaskConical },
    { id: 'mocks', label: 'Mocks', icon: Mic },
    { id: 'reviews', label: 'Reviews', icon: Star },
];

export const loopBullets: LoopBullet[] = [
    {
        label: 'Topic-wise DSA and problem-solving drills',
        icon: Code2,
    },
    {
        label: 'Debugging and refactoring tasks',
        icon: Bug,
    },
    {
        label: 'Machine coding and backend assignments',
        icon: Terminal,
    },
    {
        label: 'AI workflow practice with review checkpoints',
        icon: Sparkles,
    },
];

export const mobileLoopBullets: string[] = [
    'Solve It',
    'Apply It',
    'Get Reviewed',
    'Try Again',
];

export const practiceTaskByTab: Record<PracticeTabId, PracticeTaskContent> = {
    practice: {
        tag: 'DSA',
        title: 'Sliding Window Maximum',
        tags: ['Arrays', 'Medium'],
        codeLines: [
            'def maxSlidingWindow(nums, k):',
            '    dq, res = [], []',
            '    for i, n in enumerate(nums):',
            '        while dq and dq[0] <= i - k:',
            '            dq.pop(0)',
            '        while dq and nums[dq[-1]] < n:',
        ],
    },
    labs: {
        tag: 'Backend',
        title: 'Rate Limiter Service',
        tags: ['System Design', 'Hard'],
        codeLines: [
            'class RateLimiter:',
            '    def __init__(self, limit, window):',
            '        self.limit = limit',
            '        self.window = window',
            '        self.hits = defaultdict(list)',
            '    def allow(self, key):',
        ],
    },
    mocks: {
        tag: 'Interview',
        title: 'System Design Round',
        tags: ['Communication', 'Medium'],
        codeLines: [
            '# Design a URL shortener',
            '- Clarify scale and read/write ratio',
            '- Define API contract',
            '- Choose storage + hashing scheme',
            '- Discuss caching and rate limits',
            '- Call out tradeoffs to the interviewer',
        ],
    },
    reviews: {
        tag: 'Code Review',
        title: 'AI-Generated PR Review',
        tags: ['Judgment', 'Medium'],
        codeLines: [
            '# Reviewer checklist',
            '✔ Correctness verified against spec',
            '✔ Edge cases and failure modes tested',
            '✔ Naming and structure are clear',
            '→ Left 3 comments on generated code',
            '→ Submitted for mentor sign-off',
        ],
    },
};

export const labChecklist: ChecklistItem[] = [
    { label: 'Set up environment', done: true },
    { label: 'Implement core logic', done: true },
    { label: 'Write unit tests', done: true },
    { label: 'Optimize solution', done: false },
    { label: 'Edge case validation', done: false },
];

export const mockFeedbackMetrics: FeedbackMetric[] = [
    { label: 'Problem Solving', status: 'on-track', icon: Target },
    { label: 'Communication', status: 'improving', icon: Compass },
    { label: 'Approach', status: 'ready-for-review', icon: ClipboardCheck },
    { label: 'Code Quality', status: 'needs-review', icon: Star },
];

export const readinessMetrics: ReadinessMetric[] = [
    {
        label: 'DSA',
        status: 'on-track',
        icon: ClipboardCheck,
        accent: 'green',
    },
    {
        label: 'System Design',
        status: 'improving',
        icon: Network,
        accent: 'purple',
    },
    {
        label: 'AI Workflows',
        status: 'improving',
        icon: Sparkles,
        accent: 'orange',
    },
    {
        label: 'Interview Skills',
        status: 'needs-review',
        icon: UserCheck,
        accent: 'blue',
    },
];

export const feedbackStatusLabel: Record<FeedbackMetric['status'], string> = {
    'on-track': 'On Track',
    improving: 'Improving',
    'needs-review': 'Needs Review',
    'ready-for-review': 'Ready for Review',
};

export const desktopFeatureStrip: FeatureStripItem[] = [
    {
        title: 'Practice',
        description:
            'Problem sets, debugging exercises, and backend assignments. A mentor reads what you submit.',
        icon: Code2,
    },
    {
        title: 'Labs',
        description:
            'System design and AI-workflow labs where you build something and then explain the choices behind it.',
        icon: FlaskConical,
    },
    {
        title: 'Mocks',
        description:
            "Timed mock interviews across DSA, machine coding, and system design, run by people who've actually interviewed engineers.",
        icon: Mic,
    },
    {
        title: 'Reviews',
        description:
            'Feedback on your code and on how well you can explain it.',
        icon: Star,
    },
    {
        title: 'Readiness Tracking',
        description: 'Track progress across all key skill areas.',
        icon: LineChart,
    },
];

export const mobileFeatureStrip: FeatureStripItem[] = [
    {
        title: 'Practice',
        description: '',
        icon: Code2,
    },
    {
        title: 'Labs',
        description: '',
        icon: FlaskConical,
    },
    {
        title: 'Mocks',
        description: '',
        icon: Mic,
    },
    {
        title: 'Reviews',
        description: '',
        icon: Star,
    },
];
