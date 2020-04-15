import React from 'react'
import { Container } from './styles'
import { useCount } from '../../context/Counter'


export default function Mirror() {
    const { seconds } = useCount()

    return (
        <Container>
            <h2>Mirror</h2>
            <p>The same time as counter: {seconds}</p>
        </Container>
    )
}
