import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from '../Card';
import '../CardFlip/CardFlip.css'

// import { useState, useEffect } from 'react';

// export default function CardFlip() {

// const [isFlipped, setIsFlipped] = useState(false)


// useEffect(() => {
//     if (!isFlipped) {
//         setIsFlipped(!isFlipped)
//         return isFlipped
//     }
// }, [])


// function flipCard() {
//     setIsFlipped(!isFlipped)
// }

// return (
//     <ReactCardFlip flipDirection="vertical">

//         <SimpleCard />

//         <SimpleCard />

//     </ReactCardFlip>
// )

// }


export default class CardFlip extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    componentDidMount() {
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <button className="card-button" onClick={this.handleClick}>
                    <Card />
                </button>

                <button className="card-button" onClick={this.handleClick}>
                    <Card />
                </button>
            </ReactCardFlip>
        )
    }
}