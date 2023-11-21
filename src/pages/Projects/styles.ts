import { styled } from "styled-components";
import { devices } from "../../objects/sizes";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`

export const MainBox = styled.div`
  padding: 1rem ;

  border-radius: 5px;

  display: flex;
  flex-direction: row;

  transition: 0.3s;

  &:hover {
    box-shadow: 1px 1px 10px white;
  }

  @media ${devices.extraSmall} {
    display: flex;
    flex-direction: column;
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

  @media ${devices.extraSmall} {
    margin-top: 1rem;

    width: 120px;
    height: 68.9px;

    order: 1;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: #d7dce5;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  a {
    color: #94a3b8;
    font-weight: bold;
  }
`;

export const TechBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;

`;






