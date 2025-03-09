import * as Styled from "./style";
import MainAndSubtitle from "../../../../components/MainAndSubtitle";
import { fixedProps } from "../../Hw-submit";
import Button from "../../../../components/Button/Button";
import { css } from "@emotion/react";
import { getFormedDate } from "../../../../utils/date";
import { Link } from "react-router-dom";
import Typo from "../../../../components/Typo/Typo";
import { IStatus } from "../../types";
import GithubLogo from "../../../../assets/icons/github/img_dark.svg?react";
import CustomInput from "../../../../components/Input/Input";

function AssignStatus({
  onModify,
  createdAt,
  description,
  link,
  isDark,
}: IStatus) {
  return (
    <Styled.Container>
      <Styled.StatusWrapper>
        <MainAndSubtitle
          main="나의 제출 상태"
          sub={`${getFormedDate(createdAt)}에 제출 완료된 과제입니다.`}
          {...fixedProps}
        />
        <CustomInput
          padding="10px"
          height="140px"
          as="textarea"
          disabled
          value={description}
        />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            button {
              margin-bottom: 10px;
            }
          `}
        >
          <Styled.LinkWrapper>
            <GithubLogo
              width={50}
              height={50}
              fill={isDark ? "white" : "black"}
            />
            <Link to={link}>
              <Typo color="darkblue" fontSize="16">
                {link}
              </Typo>
            </Link>
          </Styled.LinkWrapper>
          <Button
            onClick={() => onModify((prev) => !prev)}
            color="darkblue"
            fontSize="18"
          >
            수정하기
          </Button>
        </div>
      </Styled.StatusWrapper>
    </Styled.Container>
  );
}

export default AssignStatus;
