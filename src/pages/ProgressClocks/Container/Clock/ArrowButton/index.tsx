import React from 'react';

import styles from './ArrowButton.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function ArrowButton() {
    
    function TurnArrow() {
        return console.log(true);
    }
    
    return (
        <div className={styles.arrowButton} onClick={TurnArrow}>
            <MdKeyboardArrowDown />
        </div>
    )
}