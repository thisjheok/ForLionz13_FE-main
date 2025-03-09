import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  ${(props) => props.theme.flexRow("center", "center")}
  border-radius: 60px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 240px;
  height: 240px;
`;

export const Title = styled.p`
  font-style: italic;
`;

export const TagWrapper = styled.div`
  ${(props) => props.theme.flexRow("", "center", 10)}
  padding: 14px 0px;
  flex-wrap: wrap;
`;

export const InnerContent = styled.div`
  opacity: 0;
  position: absolute;
  padding: 30px 50px;
  width: 100%;
  height: 400px;
  ${(props) => props.theme.flexColumn("space-between")}
  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 1;
  }

  transition: all 0.3s ease-in-out;
`;

export const InnerTag = styled.div`
  border-radius: 14px;
  padding: 6px 15px;
  border: 2px solid ${(props) => props.theme.color.white};
  font-family: "Pretendard-bold";
  color: ${(props) => props.theme.color.white};
`;
