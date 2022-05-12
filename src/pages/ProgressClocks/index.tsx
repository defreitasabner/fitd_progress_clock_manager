import React from 'react';

import Container from './Container';

import styles from './ProgressClocks.module.scss';
import Searcher from './Searcher';

export default function ProgressClocks() {
    
    const [search, setSearch] = React.useState('');
    
    return (
        <div className={styles.flexContainer}>
            <Searcher search={search} setSearch={setSearch} />
            <Container />
        </div>
    )
}