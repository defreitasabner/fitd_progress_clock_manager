import React from 'react';

import ClockButton from './ClockButton';
import EditButton from './EditButton';
import ArchiveButton from './ArchiveButton';
import ArrowButton from './ArrowButton';

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

            <div className={styles.progressClockHeader}>
                <ArrowButton />
                <h3 className = {styles.progressClockHeader__title}>{clockTitle}</h3>
                <div className={styles.progressClockHeader__buttons}>
                    <EditButton />
                    <ArchiveButton />
                </div>
            </div> 

            <div className={styles.progressClockMain}>
                <img
                    src={`assets/progress_clocks_svg/${clockSize}/${clockSize}-${clockProgressLevelStep}.svg`}
                    alt={`'${clockTitle}': ${clockProgressLevelStep}/${clockSize}`}
                    className={styles.progressClockMain__image}    
                />
            </div>

            <div className={styles.progressClockButtons}>
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

            <div className={styles.progressClockTags}>
                <p className={styles.progressClockTags__title}>tags:</p>
                {clockTags.map((tag) => (
                    <div className={styles.progressClockTags__tag}>
                        {tag}
                    </div>
                ))}
            </div>

        </div>
    )
}