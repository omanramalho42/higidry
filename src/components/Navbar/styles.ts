import styled from "styled-components"

export const Container = styled.div`
    display: flex;
`;

export const Menu = styled.nav`
    padding: 5px;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
`;

export const Item = styled.li`
    display: flex;

    padding: 10px;
    @media screen and (max-width: 1000px) {
        padding: 5px;
    }
`;

export const ItemLink = styled.a`
    cursor: pointer;
    text-decoration: none;
`;

export const ItemText = styled.h5`
    font-size: 1em;
    font-family: 'Montserrat', 'Helvetica', sans-serif;
    
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.primary};

    transition: 0.325s;
    &:hover {
        color: ${({ theme }) => theme.colors.effect_secondary};
    }
`;
