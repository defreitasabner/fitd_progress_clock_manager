import React from 'react';

import Sorter from './Sorter';
import Filter from './Filter';
import Searcher from './Searcher';
import Container from './Container';
import CreateNewClockButton from './CreateNewClockButton';
import CreateNewClockWindow from './CreateNewClockWindow';

import filterOptions from './filterOptions.json';

import styles from './ProgressClocks.module.scss';

type IFilter = typeof filterOptions[0];

export default function ProgressClocks() {
    
    const [search, setSearch] = React.useState('');
    const [sort, setSort] = React.useState('');
    const [filter, setFilter] = React.useState('');
    const [filterList, setFilterList] = React.useState<IFilter[]>(filterOptions);
    const [createNewClockWindowOpened, setCreateNewClockWindowOpened] = React.useState(false);

    return (
        <main>
            
            <section className={styles.flexContainer}>
                
                <div className={styles.menu}>
                    <Searcher search={search} setSearch={setSearch} />
                    <Sorter sort={sort} setSort={setSort} />
                    <Filter filter={filter} setFilter={setFilter} filterList={filterList} />
                    <CreateNewClockButton
                        createNewClockWindowOpened={createNewClockWindowOpened} 
                        setCreateNewClockWindowOpened={setCreateNewClockWindowOpened}
                    />
                </div>

                    <CreateNewClockWindow 
                        createNewClockWindowOpened={createNewClockWindowOpened} 
                        setCreateNewClockWindowOpened={setCreateNewClockWindowOpened} 
                    />

                    <Container search={search} filter={filter} />
            
            </section>

        </main>
    )
}