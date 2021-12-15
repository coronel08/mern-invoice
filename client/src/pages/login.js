import React from 'react'
import { Container, CenterDiv, Button, FlexDiv, H1 } from "../components/styled-components";

export default function login() {
    return (
        <Container>
            <form action="/login" method="POST">
                <CenterDiv>
                    <H1>Login, Needs work still</H1>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" required />
                    <Button type="submit" color="green">Login</Button>
                </CenterDiv>
            </form>
            <FlexDiv></FlexDiv>
        </Container>
    )
}
