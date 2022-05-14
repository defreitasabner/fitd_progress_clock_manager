import React from 'react';

import styles from './Sorter.module.scss';

interface Props {
    sort: string,
    setSort: React.Dispatch<React.SetStateAction<string>>
}

export default function Sorter(props: Props) {
    return (
        <div className={styles.sorter}>
            Sorter
        </div>
    )
}