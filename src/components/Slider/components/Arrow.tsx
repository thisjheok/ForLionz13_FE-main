import { css } from "@emotion/react";
import Left from "../assets/left.svg?react";
import Right from "../assets/right.svg?react";
import VectorRight from "../assets/vectorRight.svg?react";
import VectorLeft from "../assets/vectorLeft.svg?react";
import * as Styled from "../components/style";

interface IArrow {
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  isDark: boolean;
  isMain: boolean;
}

export function Next({ onClick, isDark, isMain }: IArrow) {
  return (
    <Styled.Right
      css={css`
        top: ${isMain ? "-4rem" : "43%"};
        right: ${isMain ? "5.5rem" : "1.5rem"};
        width: ${isMain ? "20px" : "60px"};
        height: ${isMain ? "20px" : "60px"};
        opacity: ${isMain ? 1 : 0.6};

        @media screen and (max-width: 768px) {
          right: 0;
        }
      `}
      onClick={onClick}
    >
      {isMain ? (
        <VectorRight
          width={30}
          height={30}
          stroke={isDark ? "white" : "black"}
        />
      ) : (
        <Right fill={isDark ? "white" : "black"} />
      )}
    </Styled.Right>
  );
}

export function Prev({ onClick, isDark, isMain }: IArrow) {
  return (
    <Styled.Left
      css={css`
        top: ${isMain ? "-4rem" : "43%"};
        left: ${!isMain && "1.5rem"};
        right: ${isMain && "7.8rem"};
        width: ${isMain ? "20px" : "60px"};
        height: ${isMain ? "20px" : "60px"};
        opacity: ${isMain ? 1 : 0.6};

        @media screen and (max-width: 768px) {
          right: 2rem;
        }
      `}
      onClick={onClick}
    >
      {isMain ? (
        <VectorLeft
          width={30}
          height={30}
          stroke={isDark ? "white" : "black"}
        />
      ) : (
        <Left fill={isDark ? "white" : "black"} />
      )}
    </Styled.Left>
  );
}
