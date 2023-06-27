import React from "react";

import reasonsList from "./reasonList";

// Styles
import { Container, Card } from "./styles";

const Reasons = () => (
  <Container id="reasons-to-pray">
    <h2>Reasons to Pray</h2>
    <div>
      {reasonsList.map((reason) => (
        <Card key={reason.title} img={reason.image}>
          <p>{reason.title}</p>
          <p>{reason.description}</p>
        </Card>
      ))}
    </div>
  </Container>
);

export default Reasons;
