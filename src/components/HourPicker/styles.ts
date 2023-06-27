import Styled from "styled-components";

interface BadgeProps {
  selected: boolean;
  occupied: boolean;
}

export const Container = Styled.div`
    min-width: 337px;
    max-width: 337px;
    height: 438px;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    overflow-y: auto;
    background-color: var(--darkGray);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    scrollbar-color: var(--blue) var(--gray);

`;

export const Badge = Styled.div<BadgeProps>`
    margin: 5px;
    color: ${({ occupied }) => (occupied ? "var(--gray)" : "var(--white)")}; 
    cursor: ${({ occupied }) => (occupied ? "default" : "pointer")};
    border: 1px solid;
    flex-grow: 1;
    flex-basis: 40%;
    padding: 5px 20px;
    text-align: center;
    white-space: nowrap;
    border-radius: 15px;
    font-weight: 600;
    position: relative;

    border-color: ${({ selected }) => (selected ? "var(--blue)" : "")};
    border-color: ${({ occupied }) => occupied && "var(--gray)"};
    

    background-color: ${({ selected }) => (selected ? "var(--blue)" : "")};

&:hover {
    color: ${({ selected }) => (selected ? "var(--darkBlue)" : "var(--blue)")};
    border: 1px solid var(--blue);
    
    color: ${({ occupied }) => occupied && "var(--gray)"};
    border-color: ${({ occupied }) => occupied && "var(--gray)"};
}

    &::after {
        content: "${({ occupied }) => occupied && "FULL"}";
        background-color: var(--darkGray);
        padding: 0px 2px;
        position: absolute;
        bottom: -8px;
        right: 35%;
        font-size: 0.8rem;
    }

`;
