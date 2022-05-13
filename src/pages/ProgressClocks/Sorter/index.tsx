import React from 'react';

interface Props {
    sort: string,
    setSort: React.Dispatch<React.SetStateAction<string>>
}

export default function Sorter(props: Props) {
    return (
        <div>
            Sorter
        </div>
    )
}