'use client';

import { FC, useState } from 'react';

import { mobileSpecialists, specialists } from '@/utils/specialistsItems';

import MobileMentorRow from './MobileMentorRow';
import SpecialistModal from './SpecialistsModal';

const MobileSpecialistsList: FC = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    const activeSpecialist =
        activeId !== null
            ? specialists.find((specialist) => specialist.id === activeId)
            : undefined;

    return (
        <>
            <div className="space-y-3">
                {mobileSpecialists.map((specialist) => (
                    <MobileMentorRow
                        key={specialist.id}
                        specialist={specialist}
                        onClick={() => setActiveId(specialist.id)}
                    />
                ))}
            </div>

            {activeSpecialist && (
                <SpecialistModal
                    specialist={activeSpecialist}
                    onClose={() => setActiveId(null)}
                />
            )}
        </>
    );
};

export default MobileSpecialistsList;