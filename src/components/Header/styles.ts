import styled from "styled-components";
import { devices } from "../../objects/sizes";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 0 1rem;

  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column;
    padding: 3rem;
  }
`;

export const HeaderContainer = styled.header`
  width: 33rem;
  height: auto;

  margin-top: 5.7rem;

  h1,
  h2 {
    color: #e2e8f0;
  }

  h2 {
    padding-top: 12px;
  }

  p {
    padding-top: 16px;
  }

  @media ${devices.mobileL} {
    width: 100%;
    height: auto;

    margin-top: auto;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;

  button {
    width: 100px;
    height: 30px;

    background: none;
    border: none;
    cursor: pointer;

    font-family: "IBM Plex Sans";
    font-size: medium;
    color: #64748b;
    text-align: left;

    margin-top: 1rem;

    transition: 0.1s;
  }

  button:hover {
    background: none;

    color: #ffffff;

    font-size: large;
  }

  @media ${devices.mobileL} {
    display: flex;
    flex-direction: row;

    justify-content: left;

    margin-top: 2rem;

    button {
      width: auto;
      height: 30px;
    }

    button:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

export const SocialMedia = styled.div`
  margin-top: 10rem;

  a {
    color: #64748b;

    margin-top: 1rem;
    margin-right: 1rem;

    transition: 0.1s;
  }

  a:hover {
    color: #ffffff;
  }

  @media ${devices.mobileL} {
    margin-top: 3rem;
  }
`;
export const RightSide = styled.div`
  width: 528px;
  height: auto;
  margin-top: 5.7rem;

  @media ${devices.mobileL} {
    width: auto;
    height: auto;
  }
`;
