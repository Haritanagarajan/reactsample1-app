
import React from 'react'
import { useState } from 'react';

const Content = () => {
    const [number, setAdd] = useState(0)

    const increment = () => {
        setAdd(number + 1)
    }

    const decrement = () => {
        setAdd(number - 1)
    }

    const [name, setName] = useState("FRUITS")

    const FRUITNAMES = () => {
        const Names = ["APPLE", "MANGO", "ORANGE", "PAPAYA"];
        const int = Math.floor(Math.random() * 3)
        setName(Names[int])
    }

    return (
        <main>

            <h1>THIS IS FUNCTION STATE MANAGEMENT,{name}</h1>
            <button onClick={FRUITNAMES}>Let's Go</button>
            <h3>Give Rating {number}</h3>
            <button onClick={increment}>ADD</button>
            <button onClick={decrement}>SUB</button>


        </main>

    )
}

export default Content