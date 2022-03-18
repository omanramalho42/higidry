import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.colors.background}; 
`;

export const ContainerImage = styled.div`
    display: flex;

    padding: 10px;
    justify-content: center;
    
`;

export const Image = styled.img`
    border-radius: 49%;

    /* min-width: 100px;
    max-width: 600px; */

    box-shadow: 0 0 12px 6px ${({ theme }) => theme.colors.shadow};

    transition: 0.5s;
    &:hover {
        transform: scale(1.0225);
    }
`;