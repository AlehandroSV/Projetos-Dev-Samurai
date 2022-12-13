import React from "react";

// Import Styled
import { Container, Selector, Cleaner } from "./styles";

const Filter = () => {
  const langs = [
    { name: "JavaScript", count: 5, color: "#f1c40f" },
    { name: "Vala", count: 1, color: "#f1c40f" },
  ];

  const selectors = langs.map(({ name, color, count }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));
  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
};

export default Filter;
