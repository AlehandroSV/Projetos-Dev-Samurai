import React from "react";

// Import Styled
import { Container, Sidebar, Main } from "./styles";

// Import Components
import Profile from "./Profile";
import Filter from "./Filter";

const RepositoriesPage = () => {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main></Main>
    </Container>
  );
};

export default RepositoriesPage;
