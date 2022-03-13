import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: space-between;

    padding: 0 10px;

    @media screen and (max-width: 1000px) {
        padding: 0px;
    }
    
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
    display: flex;
`;

export const Logo = styled.div`
    display: flex;
    
    cursor: pointer;

    align-items: center;
`;

export const Image = styled.img`
    width: 64px;
`;

export const Title = styled.h3`
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.primary}
`;