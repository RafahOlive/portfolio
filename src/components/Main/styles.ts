import styled from "styled-components";
import { devices } from "../../objects/sizes";

export const HomeContainer = styled.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  padding-top: 3rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  display: flex;
  flex-direction: column;

  justify-content: center;

  @media ${devices.extraSmall} {
    max-width: 640px;
  }
  @media ${devices.small} {
    max-width: 768px;
  }
  @media ${devices.medium} {
    max-width: 1024px;
    display: flex;
    flex-direction: row;
  }
  @media ${devices.large} {
    max-width: 1280px;
    display: flex;
    flex-direction: row;
  }
  @media ${devices.extraLarge} {
    max-width: 1536px;
    display: flex;
    flex-direction: row;
  }
`;

export const HeaderContainer = styled.header`
  h3 {
    padding-top: 12px;
  }

  p {
    padding-top: 16px;
  }

  @media ${devices.small} {
    position: static;
  }

  @media ${devices.medium} {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    position: sticky;
    top: 3rem;

    align-self: flex-start;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  margin-top: 2rem;

  text-align: center;
    vertical-align: center;

  button, a {
    width: fit-content;
    background: none;
    border: none;
    cursor: pointer;

    font-family: "IBM Plex Sans";
    font-size: medium;
    color: #64748b;

    transition: 0.1s;
  }

  button:hover, a:hover {
    background: none;

    color: #ffffff;

    font-size: large;
  }
  @media ${devices.extraSmall} {
    display: flex;
    flex-direction: row;
    gap: 10px;

    margin-top: 1rem;
    button {
      width: auto;
      height: 30px;
    }
  }

  @media ${devices.small} {
    display: flex;
    flex-direction: row;
    gap: 10px;

    /* margin-top: 1rem; */
    button {
      width: auto;
      height: 30px;
    }
  }

  @media ${devices.medium} {
    display: flex;
    flex-direction: row;
    margin-top: 5.4rem;
  }

  @media ${devices.large} {
    display: flex;
    flex-direction: row;

    margin-top: 5.4rem;
  }
`;

export const SocialMedia = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;

  a {
    color: #64748b;

    margin-top: 1rem;
    margin-right: 1rem;

    transition: 0.1s;
  }

  a:hover {
    color: #ffffff;
  }

  @media ${devices.extraSmall} {
    margin-top: 1rem;
  }
  @media ${devices.medium}{
    order: 2;
    margin-top: 30rem;
  }

`;
export const RightSide = styled.div`
  margin-top: 4rem;
  width: 100%;
  height: auto;
`;
