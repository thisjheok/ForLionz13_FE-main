import { css } from "@emotion/react";
import Typo from "../../components/Typo/Typo";
import * as Styled from "./style";
import FullScreenSlider from "../../components/Slider/FullScreenSlider";
import { TEXT } from "../../constants/text";
import Card from "../../components/Card/SliderCard";
import { SliderProps } from "./constant/constant";
import LionzText from "./components/LionzText/Text";
import { useLoginInfoState } from "../../context/LoginUser/User";
import { useAllNotification } from "../../hooks";
import { ERROR } from "../../constants/message";
import { compare } from "../../utils/date";
import GreetText from "./components/UserGreeting/Text";
import TrendingCard from "../../components/Card/TrendingCard";
import { useAllQna } from "../../hooks/api/qna/useAllQna";

function Home() {
  const userCt = useLoginInfoState();
  const { part, name } = userCt;

  const { data: noticesData, error } = useAllNotification();
  const { data: allQna } = useAllQna();
  const recentSortData = noticesData?.sort((a, b) => compare(a, b));

  if (error === "rejected") throw new Error(ERROR.ALL_NOTICE);

  return (
    <Styled.Wrapper>
      <div
        css={css`
          position: relative;
        `}
      >
        <Styled.Banner>
          <Styled.Textwrapper>
            <Styled.Text>
              <LionzText text={TEXT.HOME_MAIN_TEXT.split("")} />
              <Typo color="darkpink" weight="700" fontSize="50">
                &nbsp;LIONZ
              </Typo>
            </Styled.Text>
            <GreetText text={`${part} ${name}`} />
          </Styled.Textwrapper>
        </Styled.Banner>
        <Styled.ContentWrapper>
          <div>
            <Styled.NoticeTitle>
              <Typo fontSize="40" weight="600" isItalic={true}>
                Notification
              </Typo>
            </Styled.NoticeTitle>
            <FullScreenSlider isMain={true}>
              {recentSortData?.map((item, index) => (
                <Card
                  key={item.id}
                  part={item.part}
                  title={item.title}
                  createdAt={item.createdAt}
                  content={item.content}
                  bgcolor={SliderProps.color[index % 3]}
                  logo={SliderProps.imgs[index % 3]}
                />
              ))}
            </FullScreenSlider>
          </div>
          <div>
            <Styled.TrendingTitle>
              <Typo fontSize="40" weight="600" isItalic={true}>
                Trending
              </Typo>
            </Styled.TrendingTitle>
            <Styled.TrendingList id="trend_list">
              {allQna
                ?.sort((a, b) => b.likes - a.likes)
                .map((data) => (
                  <TrendingCard
                    id={data?.questionId}
                    text={data?.title}
                    createdAt={data.createdAt.slice(0, 10)}
                    likes={data?.likes}
                    comments={data?.commentCount}
                  />
                ))}
            </Styled.TrendingList>
          </div>
        </Styled.ContentWrapper>
      </div>
    </Styled.Wrapper>
  );
}

export default Home;
