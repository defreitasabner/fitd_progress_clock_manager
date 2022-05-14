import React from 'react';

import styles from './Filter.module.scss';

interface Props {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filter(props: Props) {
    return (
        <div className={styles.filter}>
            Filter
        </div>
    )
}