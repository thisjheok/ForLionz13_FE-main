import { useEffect, useState } from "react";
import MainAndSubtitle from "../../../components/MainAndSubtitle";
import * as Styled from "./style";
import Button from "../../../components/Button/Button";
import Typo from "../../../components/Typo/Typo";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  getDeadlineTime,
  initialDate,
  ISOtoY_M_D_Date,
} from "../../../utils/date";
import { useGetAssignmentById } from "../../../hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import PartToggle from "../../../components/PartToggle/PartToggle";
import { TEXT, TITLE } from "./constant/text";
import { ERROR } from "../../../constants/message";
import { URL_MAP } from "../../../constants/url";
import CustomInput from "../../../components/Input/Input";

const defaultProps = {
  fontsizes: ["30", "14"],
  gap: "5",
};

interface IInputs {
  title: string;
  category: string;
  tag: string;
  content: string;
  link: string;
}

function UploadHW() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const allowed = useLoaderData();

  useEffect(() => {
    if (allowed === "LIMIT") {
      navigate("/*");
    }
  }, [allowed]);

  const { data, error } = useGetAssignmentById(state?.id);

  if (error === "rejected") throw new Error(ERROR.ID_ASSIGNMENT);

  const { register, handleSubmit, reset, getValues } = useForm<IInputs>({});

  const [date, setDate] = useState(initialDate());
  const [part, setPart] = useState("all");
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const [hour, setHour] = useState("");

  const AddTag = () => {
    setTags((obj) => {
      return [...obj, tag];
    });
    setTag("");
  };

  const DeleteTag = () => {
    setTags([]);
    setTag("");
  };

  useEffect(() => {
    if (data) {
      reset({
        title: data?.title,
        content: data?.content,
        category: data?.category,
      });
      setDate(ISOtoY_M_D_Date(data?.expireAt));
      setTags([...data?.tags]);
      setPart(data?.part.toLowerCase());
    }
  }, [state?.id, data]);

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const expireAt = getDeadlineTime(date, hour);

    console.log(data);

    const values = getValues();
    const formData = {
      ...data,
      category: values.category.toUpperCase(),
      part: part.toUpperCase(),
      tags: [...tags],
      expireAt,
    };

    try {
      if (state?.id === undefined) {
        await axios.post(import.meta.env.VITE_ASSIGNMENT, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else if (typeof state?.id === "string") {
        await axios.put(
          `${import.meta.env.VITE_ASSIGNMENT}/${+state?.id}`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      navigate(`/${URL_MAP.ASSIGNMENT}`);
    } catch (err) {
      throw new Error(ERROR.ASSIGNMENT_UPLOAD);
    }
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <MainAndSubtitle
          main={TITLE["title"]}
          sub={TEXT["title"]}
          {...defaultProps}
        />
        <Styled.TitleInput {...register("title")} />
      </div>
      <div>
        <MainAndSubtitle
          main={TITLE["deadline"]}
          sub={TEXT["deadline"]}
          {...defaultProps}
        />
        <Styled.DateInput
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        />
        <CustomInput
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          placeholder="시간"
        />
      </div>
      <Styled.PartContainer>
        <MainAndSubtitle main="Part" sub="ALL/FE/BE" {...defaultProps} />
        <Styled.HorizontalAlignWrapper>
          <PartToggle part={part} setPart={setPart} />
        </Styled.HorizontalAlignWrapper>
      </Styled.PartContainer>
      <Styled.CategoryContainer>
        <MainAndSubtitle
          main={TITLE["category"]}
          sub={TEXT["category"]}
          {...defaultProps}
          gap="8"
        />
        <Styled.CategoryInput {...register("category")} />
      </Styled.CategoryContainer>
      <div>
        <Styled.TagsContainer>
          <Styled.TitleAndTagWrapper>
            <MainAndSubtitle
              main={TITLE["tag"]}
              sub={TEXT["tag"]}
              {...defaultProps}
            />
            <Styled.HorizontalAlignWrapper>
              {tags.map((item, index) => (
                <Typo key={index} color="darkblue">
                  {item}
                </Typo>
              ))}
            </Styled.HorizontalAlignWrapper>
          </Styled.TitleAndTagWrapper>
          <Styled.HorizontalAlignWrapper>
            <Styled.Btn onClick={AddTag}>
              <Typo color="darkblue">생성</Typo>
            </Styled.Btn>
            <Styled.Btn onClick={DeleteTag}>
              <Typo color="darkblue">삭제</Typo>
            </Styled.Btn>
          </Styled.HorizontalAlignWrapper>
        </Styled.TagsContainer>
        <div>
          <Styled.TagInput
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
      </div>
      <div>
        <MainAndSubtitle
          main={TITLE["link"]}
          sub={TEXT["link"]}
          {...defaultProps}
        />
        <Styled.LinkInput {...register("link")} />
      </div>
      <div>
        <MainAndSubtitle
          main={TITLE["content"]}
          sub={TEXT["content"]}
          {...defaultProps}
        />
        <Styled.ContentInput {...register("content")} />
      </div>
      <Styled.BtnWrapper>
        <Button
          type="reset"
          onClick={() => navigate(-1)}
          width="130px"
          height="36px"
          bgcolor="black"
          color="white"
        >
          작성 취소
        </Button>
        <Button
          type="submit"
          width="130px"
          height="36px"
          bgcolor="darkblue"
          color="white"
        >
          업로드하기
        </Button>
      </Styled.BtnWrapper>
    </Styled.Form>
  );
}

export default UploadHW;
