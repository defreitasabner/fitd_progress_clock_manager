import React, { useEffect } from 'react';

import Clock from './Clock';

import styles from './Container.module.scss';

import mocks from './mocks.json';

export default function Container() {

    const [clocksList, setClockList] = React.useState(mocks);
    
    return (
        <div className={styles.container}>
            {clocksList.map((clock, index) => (
                <Clock 
                    key={index}
                    { ...clock}
                />
            ))}
        </div>
    )
}