import MainAndSubtitle from "../../../../components/MainAndSubtitle";
import { SUB_TEXT } from "../../../../constants/text";
import { fixedProps } from "../../Hw-submit";
import RecentUploadSlider from "../../../../components/Slider/RecentUploadSlider";
import * as Styled from "./style";
import { ReactNode } from "react";
import Typo from "../../../../components/Typo/Typo";
import { memo } from "react";

const RecentUploader = memo(function RecentUploader({
  cnt,
  children,
}: {
  cnt: number;
  children: ReactNode;
}) {
  return (
    <Styled.TotalWrapper>
      <Styled.ContentWrapper>
        <MainAndSubtitle
          main="최근 업로드된 과제"
          sub={SUB_TEXT.HW_RECENT_UPLOAD}
          {...fixedProps}
        />
        <Styled.SliderWrapper>
          {cnt !== 0 ? (
            <RecentUploadSlider cnt={cnt}>{children}</RecentUploadSlider>
          ) : (
            <Typo color="darkgray" fontSize="16">
              아무도 아직 제출하지 않았어요 !
            </Typo>
          )}
        </Styled.SliderWrapper>
      </Styled.ContentWrapper>
    </Styled.TotalWrapper>
  );
});

export default RecentUploader;
