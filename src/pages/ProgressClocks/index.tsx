import React from 'react';

import Sorter from './Sorter';
import Filter from './Filter';
import Searcher from './Searcher';
import Container from './Container';
import CreateNewClockButton from './CreateNewClockButton';

import styles from './ProgressClocks.module.scss';
import CreateNewClockWindow from './CreateNewClockWindow';

export default function ProgressClocks() {
    
    const [search, setSearch] = React.useState('');
    const [sort, setSort] = React.useState('');
    const [filter, setFilter] = React.useState<number | null>(null);
    const [createNewClockWindowOpened, setCreateNewClockWindowOpened] = React.useState(false);

    return (
        <main>
            
            <section className={styles.flexContainer}>
                
                <div className={styles.menu}>
                    <Searcher search={search} setSearch={setSearch} />
                    <Sorter sort={sort} setSort={setSort} />
                    <Filter filter={filter} setFilter={setFilter} />
                    <CreateNewClockButton
                        createNewClockWindowOpened={createNewClockWindowOpened} 
                        setCreateNewClockWindowOpened={setCreateNewClockWindowOpened}
                    />
                </div>

                    <CreateNewClockWindow 
                        createNewClockWindowOpened={createNewClockWindowOpened} 
                        setCreateNewClockWindowOpened={setCreateNewClockWindowOpened} 
                    />

                    <Container search={search} />
            
            </section>

        </main>
    )
}