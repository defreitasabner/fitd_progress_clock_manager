import React from 'react';

import Clock from './Clock';

import styles from './Container.module.scss';

import mocks from './mocks.json';

export default function Container() {

    const [clocks, setClocks] = React.useState(mocks);

    return (
        <div className={styles.container}>
            {clocks.map((clock, index) => (
                <Clock 
                    key={index}
                    {...clock}
                />
            ))}
        </div>
    )
}