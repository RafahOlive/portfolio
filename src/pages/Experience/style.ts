import { styled } from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding: 1rem;

  border-radius: 5px;

  transition: 0.3s;

  &:hover {
    box-shadow: 1px 1px 10px white;
  }
`;

export const Data = styled.div`
  color: #5c6b82;
`;
export const Text = styled.div`
  h3 {
    color: #d7dce5;
  }

  h4 {
    color: #5c6b82;
  }

  p {
    padding-top: 5px;
  }
`;
