import { FC } from 'react';

import { mentorshipSystemPoints } from '@/utils/specialistsItems';

const MentorshipSystemPanel: FC = () => {
    return (
        <div>
            <span
                className="
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-[0.04em]
                    text-(--specialists-sidebar-eyebrow-text)
                "
            >
                Our Mentorship System
            </span>

            <h3
                className="
                    mt-3
                    text-[26px]
                    font-bold
                    leading-[1.2]
                    tracking-[-1%]
                    text-(--specialists-sidebar-title-text)
                "
            >
                Guidance Built Around Skill Outcomes
            </h3>

            <p
                className="
                    mt-3
                    text-[15px]
                    leading-[1.55]
                    text-(--specialists-sidebar-text)
                "
            >
                Mentorship at InterviewCall is structured around the skills
                serious engineers need to build, explain, and improve their
                work in the AI era.
            </p>

            <div className="mt-6 space-y-4 border-t border-(--specialists-sidebar-divider) pt-6">
                {mentorshipSystemPoints.map((point) => {
                    const Icon = point.icon;

                    return (
                        <div
                            key={point.label}
                            className="flex items-center gap-3"
                        >
                            <span
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-(--specialists-sidebar-icon-bg)
                                    text-(--specialists-sidebar-icon-text)
                                "
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-4.5 w-4.5"
                                    strokeWidth={1.9}
                                />
                            </span>

                            <p
                                className="
                                    text-[14px]
                                    font-semibold
                                    leading-[1.35]
                                    text-(--specialists-sidebar-title-text)
                                "
                            >
                                {point.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MentorshipSystemPanel;
