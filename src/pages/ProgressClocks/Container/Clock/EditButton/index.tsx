import React from 'react';

import { BsPencilFill} from 'react-icons/bs'

import styles from './EditButton.module.scss';

export default function EditButton() {
    
    function EditClockInfo() {
        return console.log(true);
    }
    
    return (
        <div className={styles.editButton} onClick={EditClockInfo}>
            <BsPencilFill />
        </div>
    )
}