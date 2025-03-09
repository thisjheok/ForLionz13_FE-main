import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const AlignStyle = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumnContent = css`
  ${AlignStyle};
  width: 90%;
  place-self: center;
`;

export const AssignForm = styled.form`
  ${AlignStyle};
`;

export const SubmitWrapper = styled.div`
  ${flexColumnContent};
  gap: 10px;
  button {
    place-self: end;
    text-align: start;
  }
  textarea {
    margin-bottom: 40px;
  }
`;
