import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MySlider from "./Slider";
import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledSlider = styled(MySlider)`
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  position: relative;
`;

export default function FullScreenSlider({
  isMain,
  children,
}: {
  isMain: boolean;
  children: ReactNode;
}) {
  return (
    <div
      css={css`
        position: relative;
        width: ${isMain ? "55vw" : "100%"};
      `}
    >
      <StyledSlider
        arrows={true}
        dots={true}
        autoplay={true}
        infinite={true}
        speed={500}
        isMainSlider={isMain}
      >
        {children}
      </StyledSlider>
    </div>
  );
}
