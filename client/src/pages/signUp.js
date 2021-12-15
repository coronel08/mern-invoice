import React, { useState } from "react";
import { Container, CenterDiv, Button, FlexDiv, H1 } from "../components/styled-components";

export default function SignUp() {
    // Initialize State
    const [formData, setFormData] = useState({ name: "", email: "", password: "", })

    // Set Values to input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    // Add processing form stuff here for Server
    const handleSubmit = (event) => {
        event.preventDefault();
        const url = "http://localhost:3001/register"
        const options = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(url, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => {console.log("Error from fetch Sign Up", err)})
    }

    return (
        <Container>
            <form action="/register" method="POST" onSubmit={e => handleSubmit(e)}>
                <CenterDiv>
                    <H1>Sign Up</H1>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={formData.name} required />
                    <label htmlFor="email">Email</label>
                    <input type="Email" placeholder="Enter Email" name="email" onChange={handleChange} value={formData.email} required />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={formData.password} required />
                    <Button type="submit" color="green">Register</Button>
                </CenterDiv>
            </form>
            <FlexDiv></FlexDiv>
        </Container>
    );
}
