import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.a`
    padding: 5px;
    
    transition: 0.5s;
    &:hover {
        transform: scale(1.1);
        color: ${({ theme }) => theme.colors.effect_secondary};
    }
`;