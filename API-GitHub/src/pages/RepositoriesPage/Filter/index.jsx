import React from "react";
import PropTypes from "prop-types";

// Import Styled
import { Container, Selector, Cleaner } from "./styles";

const Filter = ({ languages }) => {
  const selectors = languages.map(({ name, color, count }) => (
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

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Filter;
