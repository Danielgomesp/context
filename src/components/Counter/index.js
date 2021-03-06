import React, { useEffect } from 'react'
import { Container } from './styles'
import { useCount } from '../../context/Counter'

export default function Counter() {
    const { seconds, setSeconds } = useCount()

    useEffect(() => {
        setTimeout(() => setSeconds(seconds + 1), 1000)
    })


    return (
        <Container>
            <h2>Counter</h2>
            <p>Time you spent here: {seconds}</p>
        </Container>
    )
}
