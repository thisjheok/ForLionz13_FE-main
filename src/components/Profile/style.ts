import { IProfile } from "./types";
import styled from "@emotion/styled";

export const User = styled.img<IProfile>`
  width: ${(props) => props.size || "50"}px;
  height: ${(props) => props.size || "50"}px;
  border-radius: ${(props) => props.radius || "50%"};
  object-fit: cover;
`;
