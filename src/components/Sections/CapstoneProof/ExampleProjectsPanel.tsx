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
<<<<<<< HEAD
                self-start
                rounded-xl
                border
                border-(--proof-section-card-border)
                bg-(--proof-section-card-bg)
                p-3
                sm:p-3.5
=======
                w-full
                max-w-[500px]
                rounded-[17px]
                border
                border-[#DCE5F6]
                bg-[#FFFEFD]
                p-6
>>>>>>> 8d136ea8a0d66a671ecfc8a8818d944007280aae
            "
        >
            <span
                className="
                    px-1
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.04em]
                    text-(--proof-section-eyebrow-text)
                "
            >
                Example Capstone Projects
            </span>

            <div className="mt-3 space-y-2.5">
                {exampleProjects.map((project, index) => {
                    const Icon = project.icon;
                    const isMobileHidden = index >= 2;

                    return (
                        <article
                            key={project.title}
                            className={`
                                items-start
                                gap-3
                                rounded-lg
                                border
                                border-(--proof-section-card-border)
                                bg-white
                                p-3
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
<<<<<<< HEAD
                                    h-9
                                    w-9
=======
                                    h-18
                                    w-18
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-[9px]
                                    ${accentStyles[project.accent]}
                                `}
                            >
                                <Icon
                                    aria-hidden="true"
<<<<<<< HEAD
                                    className="h-4.5 w-4.5"
=======
                                    className="h-9 w-9"
>>>>>>> ff7b351bedd2b94f3966d98a1fa592a427e5b4d5
                                    strokeWidth={1.8}
                                />
                            </span>

                            <div className="min-w-0">
                                <h3
                                    className="
                                        text-[12px]
                                        font-semibold
                                        leading-[1.15]
                                        text-(--proof-section-card-title)
                                    "
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        text-[10px]
                                        leading-[1.4]
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
                    mt-3
                    px-1
                    text-[10px]
                    leading-[1.4]
                    text-(--proof-section-card-text)
                "
            >
                Your track and interests decide the direction.{' '}
                <span className="hidden lg:inline">
                    These four are examples.
                </span>
<<<<<<< HEAD
                <span className="lg:hidden">
                    These are examples.
                </span>
            </p>
=======
                <span className="lg:hidden">These are examples.</span>
            </p> */}
>>>>>>> 8d136ea8a0d66a671ecfc8a8818d944007280aae
        </div>
    );
};

export default ExampleProjectsPanel;