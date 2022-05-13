import React from 'react';

interface Props {
    name: string,
    type: string,
    clockSize: number,
    clockProgressLevelStep: number,
    setClockProgressLevelStep: React.Dispatch<React.SetStateAction<number>>
}

export default function ClockButton({ name, type, clockSize, clockProgressLevelStep, setClockProgressLevelStep }: Props) {
    
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
        <button
            onClick={ type === 'increase' ? increaseClock : decreaseClock }
        >{name}</button>
    )
}