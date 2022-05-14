import React from 'react';

interface Props {
    name: string,
    type: string,
    className: string,
    clockSize: number,
    clockProgressLevelStep: number,
    setClockProgressLevelStep: React.Dispatch<React.SetStateAction<number>>
}

export default function ClockButton({ name, type, className, clockSize, clockProgressLevelStep, setClockProgressLevelStep }: Props) {
    
    function increaseClock() {
        if(clockProgressLevelStep !== clockSize) {
            setClockProgressLevelStep(clockProgressLevelStep += 1);
        }
    }

    function decreaseClock() {
        if(clockProgressLevelStep !== 0) {
            setClockProgressLevelStep(clockProgressLevelStep -= 1);
        }
    }
    
    return (
        <button className={className}
            onClick={ type === 'increase' ? increaseClock : decreaseClock }
        >{name}</button>
    )
}