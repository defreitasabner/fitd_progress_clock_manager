import React from 'react';

import ClockButton from './ClockButton';

import styles from './Clock.module.scss';
import classNames from 'classnames';

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
                <h3 className = {styles.progressClockHeader__title}>{clockTitle}</h3>
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
                    className={classNames({
                        [styles.progressClockButton]: true,
                        [styles.progressClockButton__increase]: true
                    })}
                    name="Increase" 
                    type="increase"
                    clockSize={clockSize} 
                    clockProgressLevelStep={clockProgressLevelStep}
                    setClockProgressLevelStep={setClockProgressLevelStep}
                />
                <ClockButton
                    className={classNames({
                        [styles.progressClockButton]: true,
                        [styles.progressClockButton__decrease]: true
                    })} 
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