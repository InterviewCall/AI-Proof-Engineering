import { FC } from 'react';

const BAR_HEIGHTS = [
    30, 45, 60, 40, 70, 90, 55, 35, 65, 85, 50, 30, 45, 75, 95, 60, 40, 55,
    80, 65, 35, 50, 70, 90, 45, 30, 60, 85, 55, 40, 75, 95, 50, 35, 65, 80,
    45, 60, 30, 55, 70, 40, 85, 50, 65, 30, 45, 60,
];

const WaveformBars: FC = () => {
    return (
        <div
            aria-hidden="true"
            className="flex h-10 items-center gap-[3px] overflow-hidden"
        >
            {BAR_HEIGHTS.map((height, index) => (
                <span
                    key={index}
                    className="w-[3px] shrink-0 rounded-full bg-(--career-insights-video-waveform)"
                    style={{ height: `${height}%` }}
                />
            ))}
        </div>
    );
};

export default WaveformBars;
