import React from 'react';

import { MdPieChart } from 'react-icons/md'

import styles from './CreateNewClockButton.module.scss'

interface Props {
    createNewClockWindowOpened: boolean,
    setCreateNewClockWindowOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CreateNewClockButton(props: Props) {
    
    const { createNewClockWindowOpened, setCreateNewClockWindowOpened } = props;

    function openCreateNewClockWindow() {
        if(createNewClockWindowOpened === false) {
            setCreateNewClockWindowOpened(true);
        }
    }

    return (
        <div className={styles.createNewClockButton} onClick={openCreateNewClockWindow}>
            <p className={styles.createNewClockButton__text}>Create New Clock</p>
            <MdPieChart size={20}/>
        </div>
    )
}