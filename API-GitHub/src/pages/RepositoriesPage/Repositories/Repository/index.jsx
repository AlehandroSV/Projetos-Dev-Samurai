import React from "react";

import { Container, Footer, Name, Description, Link, Lang } from "./styles";

const Repository = () => {
  return (
    <Container color="">
      <Name>repo</Name>
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt
        vero neque harum! Ea totam rem non delectus placeat similique nesciunt
        illo nostrum, nam alias ex vero, earum tempore amet.
      </Description>
      <Footer color="">
        <Lang>Repo</Lang>
        <Link href="" target="_blank">
          VER
        </Link>
      </Footer>
    </Container>
  );
};

export default Repository;
