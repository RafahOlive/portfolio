import { styled } from "styled-components";
import { devices } from "../../objects/sizes";

export const MainBox = styled.div`
  width: 576px;
  height: auto;

  padding: 1rem;

  border-radius: 5px;

  display: flex;
  flex-direction: row;

  transition: 0.3s;

  &:hover {
    background: rgba(93, 104, 131, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media ${devices.mobileL} {
    width: auto;
    height: auto;

    padding: 1rem 1rem 1rem 0;

    display: flex;
    flex-direction: column;
    order: 2;
  }
`;

export const ImageBox = styled.div`
  margin-right: 1rem;

  width: 120px;
  height: 68.9px;

  img {
    width: 120px;
    height: 68.9px;
  }

  @media ${devices.mobileL} {
    margin-top: 1rem;
    margin-left: 0;
    margin-right: 0;

    width: 120px;
    height: 68.9px;

    order: 1;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  h3 {
    color: #d7dce5;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  a{
    color: #94A3B8;
    font-weight: bold;
  }
`;

export const TechBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const BubbleTechs = styled.div`
  width: auto;
  height: 28px;

  padding-left: 5px;
  padding-right: 5px;

  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #122b39;

  color: #5ee9d3;
`;
