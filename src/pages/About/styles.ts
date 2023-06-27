import Styled from "styled-components";

export const Container = Styled.section`
    display: flex;
    justify-content: space-around;
    margin: 2rem 10%;

    img {
        width: 40vw;
        margin: 1rem;
    }

    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
    
        h2 { 
            font-size: 2.4rem;
            font-weight: bold;
            margin: 1rem 1rem 0.5rem 1rem;
        }
    
        p {
            margin: 1rem;
            font-size: 1.2rem;
        }
    }

    @media (max-width: 1000px) {
        img {
            width: 90vw;
        }

        flex-direction: column;
        align-items: center;

    }


`;
