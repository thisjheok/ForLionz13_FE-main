import MainAndSubtitle from "../../components/MainAndSubtitle";
import * as Styled from "./style";
import { useContext, useEffect, useState } from "react";
import { useQnaDetail, useSubmit, useTags } from "../../hooks";
import { getParentTagData } from "../../api/qna";
import { ChildtagType } from "../../types";
import Button from "../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { SUB_TEXT } from "../../constants/text";
import Checkbox from "../Qna/components/Checkbox/Checkbox";
import { ERROR } from "../../constants/message";
import { ThemeContext } from "../../context/IsDark/IsDark";
import { css } from "@emotion/react";
import { theme } from "../../styles/theme/theme";
import CustomInput from "../../components/Input/Input";
import MarkdownInput from "./components/MarkdownInput";

const defaultProps = {
  fontsizes: ["30", "14"],
  gap: "5",
};

interface IInputs {
  title: string;
  tag: string;
  content: string;
}

function QuestionUpload() {
  const [child, setChild] = useState<ChildtagType[]>();
  const { query, setQuery, urls, setUrls, onSubmit } = useSubmit();
  const { register, handleSubmit, reset } = useForm<IInputs>();

  const navigate = useNavigate();
  const { state } = useLocation();

  const { data: tags } = useTags();
  const { data, error } = useQnaDetail(state?.id);
  const { isDark } = useContext(ThemeContext);
  if (error === "rejected") throw new Error(ERROR.ID_QNA);

  const defaultDarkModeCss = `
    background-color: ${
      isDark ? theme.color.lightblack : theme.mode.light.bgColor
    };
    color: ${isDark ? theme.mode.dark.main : theme.mode.light.main};
`;

  useEffect(() => {
    if (data) {
      reset({ title: data?.title, content: data?.content });
      setUrls([...data?.postImageUrls]);
    }
  }, [state?.id, data]);

  const getChild = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const response = await getParentTagData(+e.target.value);

    const { childTags } = response.data;

    setChild(childTags);
    setQuery([]);
  };

  const handleCodeInput = () => {
    const input = document.getElementById("content") as HTMLInputElement;

    input.value += "\n```language\ncode\n```\n";
    input.focus();
  };

  const handleImgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files || files.length !== 1) return;

    const response = await axios
      .post(
        `${import.meta.env.VITE_QUESTION}/image`,
        {
          file: files[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .catch((err) => {
        console.log(err);
        throw new Error(ERROR.FILE_UPLOAD);
      });

    const url = response.data.data;
    setUrls((obj) => {
      return [...obj, url];
    });

    const input = document.getElementById("content") as HTMLInputElement;
    input.value += "  \n  \n![](" + url + ")  \n  \n";

    input.focus();
  };

  return (
    <Styled.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        <MainAndSubtitle
          main="Title"
          sub={SUB_TEXT.QNA_TITLE}
          {...defaultProps}
        />
        <CustomInput
          ref={null}
          radius={1.5}
          padding="10px"
          width="100%"
          register={register("title")}
        />
      </div>
      <div>
        <MainAndSubtitle main="Tag" sub={SUB_TEXT.QNA_TAGS} {...defaultProps} />
        <Styled.HorizonWrapper>
          <Styled.SelectTag
            css={css`
              ${defaultDarkModeCss}
            `}
            onChange={getChild}
          >
            <option value="default">선택</option>
            {tags?.slice(1)?.map((item) => (
              <option key={item.parentTagId} value={item.parentTagId}>
                {item.name}
              </option>
            ))}
          </Styled.SelectTag>
          <Styled.CheckBoxWrapper>
            {child?.map((item) => (
              <Checkbox
                key={item.childTagId}
                isDark={isDark}
                setClickedValue={setQuery}
                text={item.name}
                id={item.childTagId}
                values={query}
              />
            ))}
          </Styled.CheckBoxWrapper>
        </Styled.HorizonWrapper>
      </div>
      <div>
        <Styled.ContentTitleWrapper>
          <Styled.ContentTitleAndBtnWrapper>
            <MainAndSubtitle
              main="Content"
              sub={SUB_TEXT.QNA_CONTENT}
              {...defaultProps}
            />
            <MarkdownInput
              onCodeClick={handleCodeInput}
              onImgClick={handleImgUpload}
              isDark={isDark}
            />
          </Styled.ContentTitleAndBtnWrapper>
          <Styled.HorizonWrapper>
            {urls.map((item) => (
              <Styled.PreviewImg width="60" height="60" src={item} />
            ))}
          </Styled.HorizonWrapper>
        </Styled.ContentTitleWrapper>
        <CustomInput
          id="content"
          radius={1.5}
          width="100%"
          as="textarea"
          register={register("content")}
        />
      </div>
      <Styled.SubmitBtnWrapper>
        <Button onClick={() => navigate(-1)} bgcolor="black" color="white">
          작성 취소
        </Button>
        <Button type="submit" color="white" bgcolor="darkblue">
          업로드
        </Button>
      </Styled.SubmitBtnWrapper>
    </Styled.Wrapper>
  );
}

export default QuestionUpload;
