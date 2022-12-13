// Import Libs
import React, { useState } from "react";

// Import IMG/Icons
import gitHubLogo from "../../assets/imgs/github-logo.svg";
import { MdSearch } from "react-icons/md";

// Import Styled
import { Container, Logo, Title, Form, Input, Button } from "./styles";

const Main = () => {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <Logo src={gitHubLogo} alt="API GitHub" />
      <Title>API GitHub</Title>

      <Form>
        <Input
          placeholder="Usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default Main;
