import React from 'react';
import ReactCardFlip from 'react-card-flip';
import SimpleCard from '../SimpleCard'
import { useState, useEffect } from 'react';

export default function CardFlip() {

    const [isFlipped, setIsFlipped] = useState(false)


    useEffect(() => {
        if (!isFlipped) {
            setIsFlipped(!isFlipped)
            return isFlipped
        }
    }, [])

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

            <SimpleCard />

            <SimpleCard />

        </ReactCardFlip>
    )

}