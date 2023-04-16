import { css } from "styled-components";

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 970px) {
        ${props}
    }`;
  };




