import React from 'react';

import styles from './ArchiveButton.module.scss';
import { BsArchiveFill } from 'react-icons/bs'

export default function ArchiveButton() {
    
    function ArchiveClock() {
        return console.log(true);
    }
    
    return (
        <div className={styles.archiveButton} onClick={ArchiveClock}>
            <BsArchiveFill />
        </div>
    )
}