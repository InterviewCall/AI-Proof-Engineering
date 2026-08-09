import { FC } from 'react';

import { type CapstoneAccent } from '@/types/capstoneProof';
import { exampleProjects } from '@/utils/capstoneProofItems';

const accentStyles: Record<CapstoneAccent, string> = {
    blue: 'bg-(--proof-section-blue-bg) text-(--proof-section-blue-text)',
    green: 'bg-(--proof-section-green-bg) text-(--proof-section-green-text)',
    purple:
        'bg-(--proof-section-purple-bg) text-(--proof-section-purple-text)',
    orange:
        'bg-(--proof-section-orange-bg) text-(--proof-section-orange-text)',
};

const ExampleProjectsPanel: FC = () => {
    return (
        <div>
            <span
                className="
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-[0.04em]
                    text-(--proof-section-eyebrow-text)
                "
            >
                Example Capstone Projects
            </span>

            <div className="mt-4 space-y-3">
                {exampleProjects.map((project) => {
                    const Icon = project.icon;

                    return (
                        <article
                            key={project.title}
                            className="
                                flex
                                items-start
                                gap-3.5
                                rounded-xl
                                border
                                border-(--proof-section-card-border)
                                p-4
                            "
                        >
                            <span
                                className={`
                                    flex
                                    h-10.5
                                    w-10.5
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-[10px]
                                    ${accentStyles[project.accent]}
                                `}
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-5.5 w-5.5"
                                    strokeWidth={1.8}
                                />
                            </span>

                            <div className="min-w-0">
                                <h3
                                    className="
                                        text-[15px]
                                        font-semibold
                                        leading-tight
                                        text-(--proof-section-card-title)
                                    "
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        text-[13px]
                                        leading-[1.45]
                                        text-(--proof-section-card-text)
                                    "
                                >
                                    {project.description}
                                </p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default ExampleProjectsPanel;
