import { FC } from 'react';

import { programUpdates } from '@/utils/ecosystemItems';

import ProgramUpdateRow from './ProgramUpdateRow';

const ProgramUpdatesPanel: FC = () => {
    return (
        <div
            className="
                flex
                h-full
                flex-col
                rounded-2xl
                border
                border-(--ecosystem-resource-card-border)
                bg-(--ecosystem-resource-card-bg)
                p-6
                sm:p-8
            "
        >
            <h3
                className="
                    text-[24px]
                    font-bold
                    leading-tight
                    tracking-[-1%]
                    text-(--ecosystem-resource-card-title)
                "
            >
                Latest Program Updates
            </h3>

            <div className="mt-2">
                {programUpdates.map((update, index) => (
                    <ProgramUpdateRow
                        key={update.title}
                        update={update}
                        isLast={index === programUpdates.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProgramUpdatesPanel;
