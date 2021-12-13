import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    padding: 1rem 2rem;
    margin: 0 auto;
`;

export const H1 = styled.h1`
    text-align: center;
    color: white;
`

export const Button = styled.button`
    padding: .7rem 1rem;
    background-color: white;
    margin: 1rem;
    font-weight: bold;
    border-radius: 12px;
    border
`;

export const FlexDiv = styled.div`
    display: flex;
`;

export const CenterDiv = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
`;




// Responsive Col and Row Grid using function
function getWidthString(span) {
    if (!span) return;

    let width = (span / 12) * 100;
    return `width ${width}%;`;
}

export const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`;

export const Column = styled.div`
    float: left;
    ${(props) => (props.xs ? getWidthString(props.xs) : "width: 100%")}

    @media only screen and (min-width: 768px) {
        ${(props) => props.sm && getWidthString(props.sm)}
    }
    @media only screen and (min-width: 992px) {
        ${(props) => props.md && getWidthString(props.md)}
    }
    @media only screen and (min-width: 1200px) {
        ${(props) => props.lg && getWidthString(props.lg)}
    }
`;

/* Example of custom grid sizing.
<Row>
    <Column xs="10" sm="6" md="8" lg="4">1</Column>
    <Column xs="4">4</Column>
    <Column xs="4">5</Column>
</Row>
*/