import React from 'react';

import { MdPieChart } from 'react-icons/md'

import styles from './CreateNewClockButton.module.scss'

export default function CreateNewClockButton() {
    return (
        <div className={styles.createNewClockButton}>
            <p className={styles.createNewClockButton__text}>Create New Clock</p>
            <MdPieChart size={20}/>
        </div>
    )
}