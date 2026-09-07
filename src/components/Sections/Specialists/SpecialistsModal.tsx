'use client';

import { X } from 'lucide-react';
import { FC, useEffect } from 'react';

import { type Specialist } from '@/types/specialists';

import SpecialistCard from './SpecialistCard';

type SpecialistModalProps = {
    specialist: Specialist;
    onClose: () => void;
};

const SpecialistModal: FC<SpecialistModalProps> = ({
    specialist,
    onClose,
}) => {
    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Lock body scroll while modal is open
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={specialist.name}
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/50
                px-4
                backdrop-blur-sm
            "
            style={{ animation: 'specialist-modal-fade-in 0.18s ease-out' }}
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-sm"
                style={{
                    animation:
                        'specialist-modal-scale-in 0.18s ease-out',
                }}
                onClick={(event) => event.stopPropagation()}
            >
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="
                        absolute
                        -top-3
                        -right-3
                        z-10
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-(--specialist-card-border)
                        bg-(--specialist-card-bg)
                        text-[#0B1B3A]
                        shadow-md
                        transition-transform
                        duration-150
                        hover:scale-105
                        focus-visible:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-(--focus-ring-color)
                    "
                >
                    <X aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
                </button>

                <SpecialistCard specialist={specialist} />
            </div>

            <style>{`
                @keyframes specialist-modal-fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes specialist-modal-scale-in {
                    from { opacity: 0; transform: scale(0.94); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </div>
    );
};

export default SpecialistModal;