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
  .slick-slide div {
    cursor: pointer;
  }
  position: relative;
`;

export default function RecentUploadSlider({
  children,
  cnt,
}: {
  children: ReactNode;
  cnt: number;
}) {
  const handleCntToShow = () => {
    if (cnt <= 1) {
      return 1;
    } else if (cnt <= 2) {
      return 1.4;
    } else if (cnt >= 3) {
      return 2.4;
    }
  };

  return (
    <div
      className="recent_slide"
      css={css`
        width: 100%;
        overflow: hidden;
      `}
    >
      <StyledSlider
        dots={false}
        autoplay={true}
        infinite={true}
        slidesToShow={handleCntToShow()}
        slidesToScroll={1}
        initialSlide={-0.4}
        arrows={false}
        isMainSlider={false}
      >
        {children}
      </StyledSlider>
    </div>
  );
}
