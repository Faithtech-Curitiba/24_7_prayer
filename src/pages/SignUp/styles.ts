import Styled from "styled-components";

export const Container = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 { 
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 2rem;
        text-align: center;
    }

    #subscription {
        display: flex;
        width: 90vw;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;

        form {
            background-color: var(--darkGray);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-width: 337px;
            max-width: 337px;
            height: 438px;
            padding: 15px;
            margin: 10px;

            p {
                font-size: 1.5rem;
                color: var(--white);
                font-weight: 600;
                margin: 15px 10px;
            }

            input {
                background: none;
                border: 2px solid var(--gray);
                border-radius: 30px;
                font-weight: 600;
                padding: 13px 16px;
                color: var(--white);
                margin: 5px;
            }

            small {
                color: var(--white);
                margin: -3px 10px;
            }

            button {
                margin: 15px 5px;
                padding: 12px 16px;
                background-color: var(--blue);
                border: none;
                border-radius: 20px;
                color: var(--white);
                font-weight: 600;
                width: 50%;

                &:hover {
                    filter: brightness(120%);
                }
            }
        }
    }

    .calendar {
        background-color: var(--darkGray);
        border-radius: 10px;
        border: none;
        font: 16px "Montserrat", sans-serif;
        padding: 16px;
        margin: 10px;

        *:hover {
            background-color: var(--darkGray) !important;
            border-radius: 10px;
        }

        *:focus {
            background-color: var(--darkGray) !important;
            border-radius: 10px;
        }

        .react-calendar__navigation {
            span {
                color: var(--blue) !important;
                font-weight: 600;
                font-size: 1.3rem;
            }
        }

        .react-calendar__navigation__arrow {
            color: white;
            font: 1.5rem "Montserrat", sans-serif;
            font-weight: 600;

            &:hover {
                color: var(--blue);
            }
        } 

        .react-calendar__month-view__weekdays {
            * {
                color: #59595d;
                text-decoration: none;
                cursor: default;
            }
        }
        

        .react-calendar__tile {
            &:hover {
                outline: 1px solid var(--blue);
                * {
                    color: var(--blue);
                }
            }
        }

        .react-calendar__tile--now {
            background-color: var(--darkGray);
            * {
                color: var(--blue) !important;
            }
        }

        .react-calendar__tile--active {
            background-color: var(--darkBlue) !important;
            border-radius: 100%;

            * {
                color: var(--blue) !important;
                /* background-color: var(--darkBlue) !important; */
            }
        }

        .react-calendar__month-view__days {
            * {
                color: var(--white);
                font-weight: 500;
            } 

        }

        .react-calendar__month-view__days__day--neighboringMonth {
            * {
                color: rgba(151, 151, 151, 0.3) !important;
            }
        }

        .react-calendar__year-view__months,
        .react-calendar__decade-view__years,
        .react-calendar__century-view {
            * {
                color: white;
                font-weight: 500;
            }

            &:hover {
                color: var(--blue);
            }

            *:hover {
                color: var(--blue);
            }

            .react-calendar__tile--hasActive {
                background-color: var(--darkBlue);
                color: var(--blue);
                * {
                    color: var(--blue);
                }
                border-radius: 10px;

                &:hover {
                    background-color: var(--darkBlue) !important;

                    * {
                        background-color: var(--darkBlue) !important;
                    }
                }
            }
        }
    
    }

    #confirmation-screen {
        width: 70vw;
        color: var(--white);
        border-radius: 20px;
        background-color: var(--darkGray);
        padding: 3%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
            margin-top: 15px;
            font-size: 1.2rem;
        }

        #confirmation {
            font-weight: 600;
        }

        #calendar-links-header {
            color: var(--gray);
            font-weight: 500;
        }

        #calendar-links {
            display: flex;

            li {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 20px 30px;
                color: var(--gray);
                cursor: pointer;

                img {
                    width: 50px;
                    margin-bottom: 5px;
                }
            }
        }
    }

    .stepper {
        * {
            font: 16px "Montserrat", sans-serif;
            cursor: default;
            font-weight: 500;
        }
    }
`;
