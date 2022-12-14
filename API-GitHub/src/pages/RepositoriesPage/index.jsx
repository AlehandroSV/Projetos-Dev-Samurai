import React from "react";

// Import Styled
import { Container, Sidebar, Main } from "./styles";

// Import Components
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

const RepositoriesPage = () => {
  const user = {
    login: "AlehandroSV",
    avatar_url: "https://avatars.githubusercontent.com/u/100285156?v=4",
    name: "Alehandro Vidal",
    company: "Membro de @Startup-AWD",
    blog: "",
    location: null,
    email: null,
    bio: "Full-Stack | Web Developer | Software Engineer",
    twitter_username: "VidalAlehandro",
    followers: 16,
    following: 23,
  };

  const repositories = [
    {
      name: "Vala",
      description: "ValaMds",
      html_url: "#",
      language: "JavaScript",
    },
  ];

  const languages = [
    { name: "JavaScript", count: 5, color: "#f1c40f" },
    { name: "Vala", count: 1, color: "#f1c40f" },
    { name: "Vala", count: 1, color: "#f1c40f" },
    { name: "Vala", count: 1, color: "#f1c40f" },
    { name: "Vala", count: 1, color: "#f1c40f" },
  ];

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
