import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0))
    const copy = [...points]

    const Vote = (i) => {
        copy[selected] += 1
        setPoints(copy)
    }
    const indexOfMaxValue = copy.indexOf(Math.max(...copy));
    const maxValue = copy[indexOfMaxValue]
 
    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            <p>Has {points[selected]} votes</p>
            <button onClick={() => Vote(props.selected)}>vote</button>
        &nbsp;
        <button onClick={() => setSelected((generateRandom))}>next anecdote</button>
            <h1>Anecdote with most votes</h1>
            <p>Most points {anecdotes[indexOfMaxValue]}<br></br> has {maxValue} votes</p>
        </div>
    )
}
const generateRandom = (props) => {
    const min = 0
    const max = anecdotes.length
    return (
        Math.floor(Math.random() * (max - min) + min)
    )
}



const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)