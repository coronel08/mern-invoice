import React from 'react'
import {Container, Button, H1} from '../components/styled-components'

export default function Home() {
    function callApi() {
        fetch("http://localhost:3001/", { method: "GET" })
          .then(data => data.json())
          .then(json => console.log(JSON.stringify(json)))
      }

    return (
        <Container>
            <H1>Mern Invoice Start</H1>
            <Button onClick={callApi}>Call API</Button>
        </Container>
    )
}

