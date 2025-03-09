import { css } from "@emotion/react";

function Margin({ gap }: { gap: string }) {
  return (
    <div
      css={css`
        height: ${`${gap}px`};
      `}
    ></div>
  );
}

export default Margin;
