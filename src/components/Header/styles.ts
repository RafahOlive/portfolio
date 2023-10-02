import styled from "styled-components";
import { devices } from "../../objects/sizes";

export const HomeContainer = styled.main`
  margin-top: 5.7rem;

  padding: 0 10rem;

  @media ${devices.extraSmall} {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    margin-top: 3rem;

    padding: 0 2rem;
  }

  @media ${devices.small} {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    margin-top: 3rem;

    padding: 0 2rem;
  }

  @media ${devices.medium} {
  }

  @media ${devices.extraLarge} {
    margin-top: 5rem;

    padding: 0 9rem;

    /* position: fixed; */
    /* left: 20px; */
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;

  width: 33rem;
  height: auto;

  h1,
  h3 {
    color: #e2e8f0;
  }

  h3 {
    padding-top: 12px;
  }

  p {
    padding-top: 16px;
  }

  @media ${devices.extraSmall} {
    position: relative;
    width: auto;
    height: auto;

    margin-top: auto;
  }

  @media ${devices.small} {
    position: relative;
    width: auto;
    height: auto;

    margin-top: auto;
  }

  @media ${devices.large} {
    position: fixed;
    left: 20%;

    width: 25rem;
    height: auto;
  }
`;

export const HeaderMenu = styled.div`
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

    transition: 0.1s;
  }

  button:hover {
    background: none;

    color: #ffffff;

    font-size: large;
  }
  @media ${devices.extraSmall} {
    display: flex;
    flex-direction: row;
    gap: 10px;

    justify-content: left;

    margin-top: 1rem;

    order: 1;

    button {
      width: auto;
      height: 30px;
    }
  }

  @media ${devices.small} {
    display: flex;
    flex-direction: row;
    gap: 10px;

    justify-content: left;

    margin-top: 1rem;

    order: 1;

    button {
      width: auto;
      height: 30px;
    }
  }

  @media ${devices.large} {
    display: flex;
    flex-direction: column;

    margin-top: 5.4rem;

    order: 0;
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

  @media ${devices.extraSmall} {
    margin-top: 1rem;
    order: 0;
  }
  @media ${devices.small} {
    margin-top: 1rem;
    order: 0;
  }
  @media ${devices.large} {
    margin-top: 10rem;
  }
`;
export const RightSide = styled.div`
  width: 33rem;
  height: auto;

  margin-left: auto;

  /* testes */
  /* border: 1px solid pink;
  background: white; */

  @media ${devices.extraSmall} {
    width: auto;
    height: auto;

    margin-left: 0;
  }

  @media ${devices.small} {
    width: auto;
    height: auto;

    margin-left: 0;
  }

  @media ${devices.large} {
    width: 33rem;
    height: auto;

    /* margin-left: auto; */
    position: fixed;
    left: 50%;
  }
`;
