import React, { useState } from 'react'
import { Container, CenterDiv, Button, FlexDiv, H1 } from "../components/styled-components";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "http://localhost:3001/login"
        const options = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.accessToken){
                    localStorage.setItem("user", res.accessToken)
                }
            }).catch((error) => {
                console.log("Error from login fetch/post", error)
            })
    }

    return (
        <Container>
            <form action="/login" method="POST" onSubmit={e => handleSubmit(e)}>
                <CenterDiv>
                    <H1>Login, Needs work still</H1>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" name="email" onChange={handleChange} value={formData.email} required />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={formData.password} required />
                    <Button type="submit" color="green">Login</Button>
                </CenterDiv>
            </form>
            <FlexDiv></FlexDiv>
        </Container>
    )
}
