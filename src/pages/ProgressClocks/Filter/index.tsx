import React from 'react';

import styles from './Filter.module.scss';
import classNames from 'classnames';

interface IFilter {
    id: number,
    label: string
} 

interface Props {
    filter: string,
    setFilter: React.Dispatch<React.SetStateAction<string>>,
    filterList: IFilter[]
}

export default function Filter(props: Props) {
    const { filter, setFilter, filterList } = props;

    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedFilterName, setSelectedFilterName] = React.useState('no filter');

    function selectFilter(filterSelected: IFilter) {
        if(filter === filterSelected.label) setFilter('no filter');
        setFilter(filterSelected.label);
        setSelectedFilterName(filterSelected.label);
    }

    return (
        <div 
            className={styles.filter}
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
        >
            <span className={styles.filter__title}>{ selectedFilterName === 'no filter'? 'Select Filter' : selectedFilterName }</span>
            <div className={classNames({
                [styles.filter__list]: true,
                [styles['filter__list--active']]: isOpen? true : false
            })}>
                {filterList.map(filterName => (
                    <div 
                        className={styles.filter__name} 
                        key={filterName.id}
                        onClick={() => {selectFilter(filterName)}}
                    >{filterName.label}</div>
                ))}
            </div>
        </div>
    )
}