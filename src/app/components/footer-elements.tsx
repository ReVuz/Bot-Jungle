import styled from "styled-components";
import Link from "next/link";

export const Container = styled.footer`
  background-color: black;
  width: 100%;
  min-height: 120px;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: 1.2rem auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
    text-align: center; /* Center content horizontally on smaller screens */
  }
`;

export const Logo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  flex: 1;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    margin: 1rem;
    text-align: center; /* Center content horizontally on smaller screens */
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  @media (max-width: 820px) {
    width: 80%;
    justify-content: center; /* Center content horizontally on smaller screens */
  }
`;

export const SocialMediaIconsLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 1rem;
`;
