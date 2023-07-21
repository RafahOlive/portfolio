
import { styled } from "styled-components";

export const MainContainer = styled.main`
 display: flex;
    flex-direction: row;
    gap: 1rem;

    padding: 1rem;

    border-radius: 5px;

    transition: .3s;

    &:hover {
    background: #0c1f4a;
}

`

export const Data = styled.div`
color: #5C6B82;

`
export const Text = styled.div`
h3 {
        color: #d7dce5;
    }

    h4 {
        color: #5C6B82;
    }

    p{
        padding-top: 5px;
    }

`