import React, { useState } from "react";
import { Container, CenterDiv, Button, FlexDiv, H1 } from "../components/styled-components";
import { useNavigate } from "react-router-dom"

export default function SignUp() {
    // Initialize State
    const [formData, setFormData] = useState({ name: "", email: "", password: "", })
    const navigate = useNavigate()

    // Set Values to input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    // Add processing form stuff here for Server, need to extract JWT from response
    const handleSubmit = (event) => {
        event.preventDefault();
        const url = "http://localhost:3001/signup"
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
                return navigate("/")
                // window.location = "http://localhost:3000/" navigate to homepage on success, instead used useNavigate hook
            })
            .catch(err => {console.log("Error fetching server from signUp.js page ", err)})
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
