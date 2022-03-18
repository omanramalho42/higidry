import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 30px;
`;

export const Image = styled.img`
    min-width: 450px;
    box-shadow: 0 0 12px 6px ${({ theme }) => theme.colors.shadow};

    transition: 0.5s;
    &:hover {
        transform: scale(1.0225);
    }
`;

export const ImageContainer = styled.div`
    /* display: flex; */
`;

export const Title = styled.h4`
    font-size: 2em;
    font-family: 'Montserrat', 'Helvetica', sans-serif;
    
    text-align: center;
    margin-bottom: 25px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonContainer = styled.div`
    padding: 5px;
    margin-top: 40px;
`;

export const Button = styled.button`
    display: flex;

    align-items: center;
    
    padding: 15px;
    margin: auto;

    border: none;
    border-radius: 33px;
    
    color: ${({ theme}) => theme.colors.success};
    font-weight: bold;

    border: 3px solid ${({ theme }) => theme.colors.success};
    box-shadow: 0 0 6px 3px ${({ theme }) => theme.colors.shadow};

    transition: 0.325s;
    &:hover {
        box-shadow: 0 0 12px 6px ${({ theme }) => theme.colors.success};
    }
`;
