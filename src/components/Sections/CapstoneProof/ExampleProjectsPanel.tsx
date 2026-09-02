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
        <div
            className="
                w-full
                max-w-[500px]
                rounded-[17px]
                border
                border-[#DCE5F6]
                bg-[#FFFEFD]
                p-6
            "
        >
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
                {exampleProjects.map((project, index) => {
                    const Icon = project.icon;
                    const isMobileHidden = index >= 2;

                    return (
                        <article
                            key={project.title}
                            className={`
                                items-start
                                gap-3.5
                                rounded-xl
                                border
                                border-(--proof-section-card-border)
                                p-4
                                ${
                                    isMobileHidden
                                        ? 'hidden lg:flex'
                                        : 'flex'
                                }
                            `}
                        >
                            <span
                                className={`
                                    flex
                                    h-18
                                    w-18
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-[10px]
                                    ${accentStyles[project.accent]}
                                `}
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-9 w-9"
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

            {/* <p
                className="
                    mt-4
                    text-[13px]
                    leading-[1.45]
                    text-(--proof-section-card-text)
                "
            >
                Your track and interests decide the direction.{' '}
                <span className="hidden lg:inline">
                    These four are examples.
                </span>
                <span className="lg:hidden">These are examples.</span>
            </p> */}
        </div>
    );
};

export default ExampleProjectsPanel;