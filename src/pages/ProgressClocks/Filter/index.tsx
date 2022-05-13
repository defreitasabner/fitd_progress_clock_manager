import React from 'react';

interface Props {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filter(props: Props) {
    return (
        <div>
            Filter
        </div>
    )
}