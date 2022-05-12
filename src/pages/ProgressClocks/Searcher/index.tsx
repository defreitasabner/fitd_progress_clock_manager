import React from 'react';

import { CgSearch } from 'react-icons/cg';

import styles from './Searcher.module.scss';

interface Props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Searcher(props: Props) {
    
    const { search, setSearch } = props;
    
    return (
        <div className={styles.searcher__container}>
            <input 
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Search for a specific clock"
            />
            <CgSearch size={20} color="#4C4D5E" />
        </div>
    )
}