import { User } from "./style";
import { IProfile } from "./types";
import DefaultUser from "../../assets/icons/user/defaultUser.svg?react";
import { useContext } from "react";
import { ThemeContext } from "../../context/IsDark/IsDark";

export default function Profile(props: IProfile) {
  const { isDark } = useContext(ThemeContext);

  if (props.url === null || props.url === undefined) {
    return (
      <DefaultUser
        stroke={isDark ? "white" : "black"}
        width={props.size || "50"}
        height={props.size || "50"}
      />
    );
  }

  return <User src={props.url} {...props} />;
}
