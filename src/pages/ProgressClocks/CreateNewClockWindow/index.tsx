import React from 'react';

import { GrFormClose } from 'react-icons/gr'

import styles from './CreateNewClockWindow.module.scss';
import classNames from 'classnames';

interface Props {
    createNewClockWindowOpened: boolean,
    setCreateNewClockWindowOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CreateNewClockWindow(props: Props) {
    
    const { createNewClockWindowOpened, setCreateNewClockWindowOpened } = props;

    function closeCreateNewClockWindow() {
        if(createNewClockWindowOpened === true) {
            setCreateNewClockWindowOpened(false)
        }
    }

    return (
        <div className={classNames({
            [styles['createNewClockWindow--closed']]: !createNewClockWindowOpened? true : false,
            [styles['createNewClockWindow']]: createNewClockWindowOpened? true: false
        })}>
            <div className={styles.createNewClockWindow__close} onClick={closeCreateNewClockWindow}>
                <GrFormClose size={20} />
            </div>
            <div className={styles.createNewClockWindow__header}>
                <h3 className={styles.createNewClockWindow__header__title}>Create New Clock</h3>
            </div>
            <form className={styles.createNewClockWindow__form}>
                <fieldset className={styles.createNewClockWindow__form__fieldsets}>
                    <legend className={styles.createNewClockWindow__form__label}>Clock name</legend>
                    <input name="clock-name"/>
                </fieldset>
                <fieldset className={styles.createNewClockWindow__form__clockSize}>
                    <legend className={styles.createNewClockWindow__form__legend}>Clock size (steps)</legend>
                    <div>
                        <input type="radio" name="clock-size" value="4-steps" id="4-steps"/>
                        <label htmlFor="4-steps" className={styles.createNewClockWindow__form__clockSize__text}>4-steps</label>
                    </div>
                    <div>
                        <input type="radio" name="clock-size" value="6-steps" id="6-steps"/>
                        <label htmlFor="6-steps" className={styles.createNewClockWindow__form__clockSize__text}>6-steps</label>
                    </div>
                    <div>
                        <input type="radio" name="clock-size" value= "8-steps" id="8-steps"/>
                        <label htmlFor="8-steps" className={styles.createNewClockWindow__form__clockSize__text}>8-steps</label>
                    </div>
                </fieldset>
                <fieldset className={styles.createNewClockWindow__form__fieldsets}>
                    <legend className={styles.createNewClockWindow__form__label}>Tags</legend>
                    <input type="text" name="tags"/>
                </fieldset>
            </form>
        </div>
    )
}