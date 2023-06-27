import Styled from "styled-components";

// Assets
import background from "~/assets/img-heroshot.png";

export const Container = Styled.section`
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    
    color: var(--white);
    
    display: flex;
    flex-direction: column;
`;

export const Nav = Styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    white-space: nowrap;
    width: 100%;
    padding: 2rem 2rem;

    h1 {
        font-weight: 800;
        font-size: 2.4rem;
    }

    ul { 
        display: flex;
        font-size: 1.2rem;

        li { 
            font-weight: 600;
            margin-left: 2rem;
            margin-right: 2rem;
            cursor: pointer;

            a { 
                color: var(--white);
                text-decoration: none;
            }
        }

        #signup-button {
            padding: 0.8rem 2.5rem;
            align-self: flex-start;
            background-color: var(--blue); 
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;

            &:hover {
                filter: brightness(120%);
            }
        }
    }

    @media (max-width: 1000px) {
        ul {
            display: none;
        }
    }
`;

export const Content = Styled.div`
    margin-top: 25vh;

    display: flex;
    flex-direction: column;

    margin-left: 3%;
    font-weight: bold;

    p:nth-child(1) {
        font-size: 7rem;
    }
    
    p:nth-child(2) {
        font-size: 2.5rem;
    }

    p:nth-child(3) {
        font-size: 1.4rem;
        padding: 0.8rem 2.5rem;
        align-self: flex-start;
        border: 1px solid var(--white); 
        border-radius: 50px;
        margin-top: 1rem;
        font-weight: 600;
        cursor: pointer;

        a {
            text-decoration: none;
            color: var(--white);
        }

        &:hover {
            background-color: var(--white);

            a {
                color: black;
            }
        }
    }

    @media (max-width: 768px) {
        p:nth-child(1) {
            font-size: 2.7rem;
        }

        p:nth-child(2) {
            font-size: 1.5rem;
        }

        p:nth-child(3) {
            font-size: 1.2rem;
            padding: 0.5rem 1.7rem;
        }
    }
`;
