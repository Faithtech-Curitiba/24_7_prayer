import Styled from "styled-components";

export const Container = Styled.section`
    margin: 3% 8%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 { 
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 2rem;
        text-align: center;
    }

    div { 
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

interface CardProps {
  img: string;
}

export const Card = Styled.div<CardProps>`
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    color: var(--white);

    margin: 8px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end !important;
    align-items: center;
    text-align: center;
    padding: 0px 5px 3% 5px;

    flex-grow: 1;
    border-radius: 20px;
    flex-basis: 40%;
    height: 500px;

    @media (max-width: 1000px) {
        flex-basis: 90%;
    }

    p:nth-child(1) {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    p:nth-child(2) {
        font-weight: 500;
    }
    
`;
