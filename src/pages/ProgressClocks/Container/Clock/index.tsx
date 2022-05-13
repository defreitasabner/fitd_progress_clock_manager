import React from 'react';

import ClockButton from './ClockButton';

import styles from './Clock.module.scss';

interface Props {
    clockSize: number;
    clockTitle: string;
    clockTags: string[];
    clockProgressLevel: number;
}

export default function Clock(props: Props) {
    
    const { clockTitle, clockSize, clockProgressLevel, clockTags } = props;

    const [clockProgressLevelStep, setClockProgressLevelStep] = React.useState(clockProgressLevel);
    
    return (
        <div className={styles.progressClockContainer}>

            <p className={styles.progressClockTitle}>{clockTitle}</p>

            <div className={styles.progressClockImageContainer}>
                <img
                    src={`assets/progress_clocks_svg/${clockSize}/${clockSize}-${clockProgressLevelStep}.svg`}
                    alt={`'${clockTitle}': ${clockProgressLevelStep}/${clockSize}`}
                    className={styles.progressClockImage}    
                />
            </div>

            <div className={styles.progressClockButtonsContainer}>
                <ClockButton 
                    name="Increase" 
                    type="increase"
                    clockSize={clockSize} 
                    clockProgressLevelStep={clockProgressLevelStep}
                    setClockProgressLevelStep={setClockProgressLevelStep}
                />
                <ClockButton 
                    name="Decrease" 
                    type="decrease"
                    clockSize={clockSize} 
                    clockProgressLevelStep={clockProgressLevelStep}
                    setClockProgressLevelStep={setClockProgressLevelStep}
                />
            </div>

            <div className={styles.progressClockTagsContainer}>
                <p>tags:</p>
                {clockTags.map((tag) => (
                    <div className={styles.progressClockTags}>
                        {tag}
                    </div>
                ))}
            </div>

        </div>
    )
}