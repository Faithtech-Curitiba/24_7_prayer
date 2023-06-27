import Styled from "styled-components";

export const Container = Styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 5%;
    color: var(--white);

    background-color: var(--darkGray);

    #social {
        display: flex;

        p {
            font-size: 2rem;
            font-weight: 700;
        }

        * {
            margin: 12px;
        }

    }

    #address {
        display: flex;
        
        img {
            height: 30px;
            margin: 10px;
        }

        address {
            margin: 8px;
            font-weight: 500;
        }
    }
`;
