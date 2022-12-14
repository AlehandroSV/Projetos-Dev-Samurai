import React from "react";
import PropTypes from "prop-types";

// Import Icons
import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

// Import Styled
import { Container, Name, Login, Header, Avatar, Inner, Data } from "./styles";

const Profile = ({ user }) => {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>

      <Inner>
        <Data>
          <MdGroup size={20} /> {user.following}&nbsp;<i>Seguidores&nbsp;</i>
          &nbsp;&middot;&nbsp;{user.followers}&nbsp;
          <i>Seguindo</i>
        </Data>

        {user.company && (
          <Data>
            <MdWork size={20} />
            {user.company}
          </Data>
        )}

        {user.location && (
          <Data>
            <MdLocationCity />
            {user.location}
          </Data>
        )}

        {user.blog && (
          <Data>
            <MdLink />
            <a href={`/${user.blog}`} target="_blank" rel="noopener noreferrer">
              {user.blog}
            </a>
          </Data>
        )}
      </Inner>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile;
