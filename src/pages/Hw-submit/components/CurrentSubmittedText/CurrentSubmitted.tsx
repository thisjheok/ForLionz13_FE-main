import { css } from "@emotion/react";
import Typo from "../../../../components/Typo/Typo";

type CountType = {
  count: number;
};

function CurrentSubmit({ count }: CountType) {
  return (
    <div
      css={css`
        span {
          padding: 0px 3px;
        }
      `}
    >
      <Typo weight="600">현재 제출 인원</Typo>
      <Typo weight="600" color="darkblue" fontSize="40">
        {count}
      </Typo>
      <Typo weight="600">명</Typo>
    </div>
  );
}

export default CurrentSubmit;
