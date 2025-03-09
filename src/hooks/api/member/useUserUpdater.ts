import axios from "axios";
import { ERROR } from "../../../constants/message";

export function useUserUpdater() {
  const updateUserInfo = async (type: string, value: string) => {
    let data;
    if (type === "password") {
      data = { password: value };
    } else if (type === "github") {
      data = { githubAddress: value };
    } else if (type === "instagram") {
      data = { instagramId: value };
    } else if (type === "comment") {
      data = { introduction: value };
    }
    await axios
      .put(`${import.meta.env.VITE_MEMBER}/${type}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch(() => {
        throw new Error(ERROR.UPDATE_INFO);
      });
  };

  return { updateUserInfo };
}
