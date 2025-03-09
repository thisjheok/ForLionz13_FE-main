import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  margin-top: 40px;
`;

export const InformBox = styled.div`
  display: grid;
  padding: 20px 0px;
  margin: 20px 0px;
  grid-template-columns: 1.3fr 3fr;
  gap: 5px;
`;

export const ProfilePartWrapper = styled.div`
  padding: 20px;
  ${(props) => props.theme.flexColumn("", "center", 10)}
  border-right: 1px solid ${(props) => props.theme.color.lightgray};
`;

export const AlignWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "", 20)}
`;

export const IntroWrapper = styled.div`
  padding: 20px 40px;
  ${(props) => props.theme.flexColumn("center")}
`;

export const UploadBtn = styled.label`
  cursor: pointer;
  white-space: nowrap;
  padding: 8px;
  width: 140px;
  text-align: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color.darkblue};
`;

export const FileInput = styled.input`
  display: none;
`;

export const EditText = styled.p`
  width: 50px;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: ${(props) => props.theme.color.darkblue};
`;

export const ListItems = styled.div`
  ${(props) => props.theme.flexColumn("", "center")}
`;

export const Name = styled.p`
  border: none;
  font-size: 40px;
  font-weight: ${(props) => props.theme.weight.semibold};
`;

export const Introduce = styled.p`
  border: none;
  font-size: 18px;
  line-height: 1.3;
  font-weight: ${(props) => props.theme.weight.regular};
  color: ${(props) => props.theme.color.darkgray};
`;

export const Form = styled.form`
  height: 140px;
  ${(props) => props.theme.flexColumn("space-between", "", 10)}
`;

export const Btn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 50px;
  padding: 0;
  text-align: start;
  span {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: ${(props) => props.theme.color.darkblue};
  }
`;

export const UserProfile = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
`;
