import React from "react";

// Import Icons
import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

// Import Styled
import { Container, Name, Login, Header, Avatar, Inner, Data } from "./styles";

const Profile = () => {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/55540536?v=4" />
        <Login>Alehandro</Login>
        <Name>Aleahndro Gotosu</Name>
      </Header>

      <Inner>
        <Data>
          <MdGroup size={20} /> 30&nbsp;<i>Seguidores&nbsp;</i>
          &nbsp;&middot;&nbsp;10&nbsp;
          <i>Seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} />
          MoirTec
        </Data>
        <Data>
          <MdLocationCity />
          Rio Grande do Sul
        </Data>
        <Data>
          <MdLink />
          <a href="#" target="_blank" rel="noopener noreferrer">
            Vala
          </a>
        </Data>
      </Inner>
    </Container>
  );
};

export default Profile;
