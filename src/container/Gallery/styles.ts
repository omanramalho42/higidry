import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.background};
`;

interface GridProps {
    grid: number;
}

export const Grid = styled.div<GridProps>`
    display: grid;
    
    padding: 50px 0;
    margin: auto;
    
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 3vh;
    grid-column-gap: 3vh;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

export const Panel = styled.div`
    display: flex;
`;

export const Card = styled.div`
    display: flex;
    
    border-radius: 15px;

    background-color: ${({ theme }) => theme.colors.info};
    box-shadow: 0 0 12px 6px ${({ theme }) => theme.colors.shadow};

    transition: 0.5s;
    &:hover {
        transform: scale(1.0225);
    }
`;

export const Image = styled.img`
    width: 400px;
    border-radius: 15px;
`;

export const Title = styled.h1`
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;

    text-transform: uppercase;

    text-align: center;
    margin-top: 2rem;

    color: ${({ theme }) => theme.colors.primary};
`;