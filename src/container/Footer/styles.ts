import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    padding: 10px;
`;

export const Rodape = styled.h4`
    font-size: 0.9em;
    font-family: 'Montserrat', sans-serif;
    margin: auto;
    color: ${({ theme }) => theme.colors.primary};
`;