import {
    Code2,
    FolderClosed,
    MessageSquareCode,
    Network,
    Sparkles,
} from 'lucide-react';
import { FC } from 'react';

import { mentorshipSystemPoints } from '@/utils/specialistsItems';

const MentorshipSystemPanel: FC = () => {
    return (
        <div className="flex h-full min-w-0 flex-col">
            {/* Eyebrow */}
            <p
                className="
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-[0.02em]
                    text-[#0057FF]
                "
            >
                Our Mentorship System
            </p>

            {/* Heading */}
            <h3
                className="
                    mt-4
                    max-w-[280px]
                    text-[26px]
                    font-bold
                    leading-[1.12]
                    tracking-[-1.5%]
                    text-[#0B1B3A]
                "
            >
                Guidance Built Around
                <span className="block">Skill Outcomes</span>
            </h3>

            {/* Description */}
            <p
                className="
                    mt-4
                    max-w-[290px]
                    text-[15px]
                    font-normal
                    leading-[1.55]
                    text-[#18345F]
                "
            >
                Mentorship at InterviewCall is structured around the skills
                serious engineers need to build, explain, and improve their
                work in the AI era.
            </p>

            {/* Divider */}
            <div
                className="
                    mt-4
                    h-px
                    w-full
                    bg-(--specialists-sidebar-divider)
                "
            />

            {/* System points */}
            <div className="mt-1 flex flex-col">
                {mentorshipSystemPoints.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            className="
                                flex
                                min-h-[38px]
                                items-center
                                gap-3
                                border-b
                                border-(--specialists-sidebar-divider)
                                py-1.5
                            "
                        >
                            <span
                                className="
                                    flex
                                    h-7
                                    w-7
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-(--button-primary-bg)
                                    text-white
                                "
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                    strokeWidth={1.8}
                                />
                            </span>

                            <p
                                className="
                                    min-w-0
                                    text-[12px]
                                    font-semibold
                                    leading-[1.3]
                                    text-[#0B1B3A]
                                "
                            >
                                {item.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MentorshipSystemPanel;