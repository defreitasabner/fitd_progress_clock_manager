import React from 'react';

import Clock from './Clock';

import styles from './Container.module.scss';

import mocks from './mocks.json';

interface Props {
    search: string,
    filter: string
}

export default function Container(props: Props) {

    const [clocks, setClocks] = React.useState(mocks);
    const [containerOpen, setContainerOpen] = React.useState(false); // trying to minimize clock view

    const { search, filter } = props;

    function searchFor(clockName: string) {
        const regex = new RegExp(search, 'i');
        return regex.test(clockName);
    }

    function filterFor(tags: string[]) {
        if(filter !== 'no filter') return tags.includes(filter);
        return true
    }

    React.useEffect(() => {
        const newClockList = mocks.filter(clock => searchFor(clock.clockTitle) && filterFor(clock.clockTags));
        setClocks(newClockList);
    }, [search, filter])

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