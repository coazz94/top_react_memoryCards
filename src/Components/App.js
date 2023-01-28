import {React, useEffect, useState} from "react"
import "./styles.css"
import { Card } from "./Card"
import { images } from "../Data/data"




function App() {

    const [selected, setSelected] = useState([])
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    useEffect(() => {
        if (selected.length > 0) {
            !checkIfDuplicateExists(selected) ? setScore(prev => prev + 1) : setScore(0);
        }
    }, [selected])

    useEffect(() => {
        setBestScore(prevData => prevData > score ? prevData : score)
    }, [score])


    function checkIfDuplicateExists(arr) {
        return new Set(arr).size !== arr.length
    }
    const cardArray = images.map(char =>  {
        return(
            <Card
                data={char}
                key={char.id}
                selectCard={() => selectCard(char.id)}
                />
        )
    })

    const filteredCards = cardArray.sort(() => Math.random() - 0.5).splice(1,8);

    function selectCard(id) {
        setSelected(prevData => [...prevData, id])
    }


    return(
        <div>
            <div className="nav">
            <div className="heading">
                <h1>Memory Game</h1>
                <p>Get Point by clicking on a image only </p>
            </div>
            <div className="score">
                <div>Score: {score}</div>
                <div>Best Score: {bestScore}</div>
            </div>
            </div>
            <div className="game--section">
                {filteredCards}
            </div>
        </div>

    )
}




export {App}