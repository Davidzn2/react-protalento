import React, { useState } from 'react'
import '../stylesheets/home.css'

export default function Home(props) {
    const [count, setCount] = useState(0)
    const [apodo, setApodo] = useState('')
    console.log(apodo)
    return (
        <div>
            <p>La cuenta va en: {count} </p>

            <button onClick={() => setCount(count - 1)}>Resta a la cuenta</button>
            <button onClick={() => setCount(count + 1)}>Añade a la cuenta</button>

            <input onChange={(event) => setApodo(event.target.value)} />

        </div>
    )
}
