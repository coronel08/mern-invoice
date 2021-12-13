import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Button } from "../styled-components";

export const Nav = styled.nav`
    background: linear-gradient(to right, #302e24, #28313e);
    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 10000px) / 2);
    align-items: center;
    flex-wrap: wrap;

    p {
        color: white;
        padding: 0 1rem;
        font-weight: bold;
        font-size: 1.4rem;
    }
`;

export const NavButton = styled(Button)`
    margin-left: 1rem;
    background-color: black;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }

    i {
        color: white;
        padding: 0.3rem;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    @media screen and (max-width: 768px) {
        display:block;
        overflow: hidden;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;

export const NavLink = styled(Link)`
    color: #808080;
    text-decoration: none;
    margin: 0 1.5rem;
    height: 100%;
    cursor: pointer;
    transition: all .2s ease-in-out; 


    &.active {
        color: #fff;
        font-weight:500;
    }

    &:hover {
        transform: scale(1.2); 
    }

    @media screen and (max-width: 768px) {
        display: inline-flex;
        padding-bottom: 0.5rem;
        font-weight:600;
        text-decoration: none;

    }
`;
