import { UsersRound } from 'lucide-react';
import { FC } from 'react';

import { audiencePills } from '@/utils/programGlanceItems';

const ProgramAudienceBand: FC = () => {
    return (
        <div
            className="
                flex
                flex-col
                gap-5
                rounded-2xl
                border
                border-(--program-glance-audience-border)
                bg-(--program-glance-audience-bg)
                p-5
                sm:p-6
                lg:flex-row
                lg:items-center
            "
        >
            <div className="flex shrink-0 items-center gap-3 lg:w-70 lg:border-r lg:border-(--program-glance-audience-border) lg:pr-6">
                <span
                    className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-(--program-glance-audience-icon-bg)
                        text-(--program-glance-audience-icon-text)
                    "
                >
                    <UsersRound
                        aria-hidden="true"
                        className="h-5.5 w-5.5"
                        strokeWidth={1.8}
                    />
                </span>

                <p
                    className="
                        text-[14px]
                        font-semibold
                        leading-[1.4]
                        text-(--program-glance-audience-text)
                    "
                >
                    Built for software engineers adapting to AI-era
                    expectations.
                </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
                {audiencePills.map((pill) => {
                    const Icon = pill.icon;

                    return (
                        <span
                            key={pill.label}
                            className="
                                inline-flex
                                min-h-9
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-(--program-glance-pill-border)
                                bg-(--program-glance-pill-bg)
                                px-3.5
                                text-[13px]
                                font-semibold
                                whitespace-nowrap
                                text-(--program-glance-pill-text)
                            "
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-4 w-4 text-(--program-glance-pill-icon)"
                                strokeWidth={1.9}
                            />
                            {pill.label}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgramAudienceBand;
