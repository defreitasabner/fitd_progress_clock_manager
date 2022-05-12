import React from 'react';

import styles from './Clock.module.scss';

import mock from './mocks.json'; 

interface Props {
    clockSize: number,
    clockTitle: string,
    clockTags: Array<string>,
    clockProgressLevel: number
}

export default function Clock(props: Props) {
    
    const { clockSize, clockTitle, clockTags, clockProgressLevel} = props;
    
    return (
        <div className={styles.progressClockContainer}>

            <p className={styles.progressClockTitle}>{clockTitle}</p>

            <div className={styles.progressClockImageContainer}>
                <img
                    src={`assets/progress_clocks_svg/${clockSize}/${clockSize}-${clockProgressLevel}.svg`}
                    alt={`'${clockTitle}': ${clockProgressLevel}/${clockSize}`}
                    className={styles.progressClockImage}    
                />
            </div>

            <div className={styles.progressClockButtonsContainer}>
                <button>Increase</button>
                <button>Decrease</button>
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