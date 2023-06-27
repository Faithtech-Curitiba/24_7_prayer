import React, { useState, useEffect } from "react";

// API
import API from "~/api";

// Styles
import { Container, Nav, Content } from "./styles";

const Main = () => {
  const [counter, setCounter] = useState<number>(0);

  const fetchData = async () => {
    const { data } = await API.getCounter();
    if (data) {
      setCounter(data.counter);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container id="main">
      <Nav>
        <h1>24/7 Prayer</h1>
        <ul>
          <li>Home</li>
          <li>
            <a href="#reasons-to-pray">Reasons to Pray</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#signup" id="signup-button">
              Sign Up
            </a>
          </li>
        </ul>
      </Nav>
      <Content>
        <p>{counter} people</p>
        <p>are praying together!</p>
        <p>
          <a href="#signup">Join us</a>
        </p>
      </Content>
    </Container>
  );
};

export default Main;
