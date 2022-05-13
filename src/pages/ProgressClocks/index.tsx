import React from 'react';

import Sorter from './Sorter';
import Filter from './Filter';
import Searcher from './Searcher';
import Container from './Container';

import styles from './ProgressClocks.module.scss';

export default function ProgressClocks() {
    
    const [search, setSearch] = React.useState('');
    const [sort, setSort] = React.useState('');
    const [filter, setFilter] = React.useState<number | null>(null);

    return (
        <main>
            
            <section className={styles.flexContainer}>
                
                <div className={styles.menu}>
                    <Sorter sort={sort} setSort={setSort} />
                    <Filter filter={filter} setFilter={setFilter} />
                    <Searcher search={search} setSearch={setSearch} />
                </div>

                    <Container />
            
            </section>

        </main>
    )
}