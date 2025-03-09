import { ReactNode, createContext, useContext, useReducer } from "react";
import {
  IUserLoginAction,
  IUserLogoutAction,
  IUserReducerParam,
} from "../../types";

type Dispatch = (action: ActionType) => void;

type ActionType = IUserLoginAction | IUserLogoutAction;

interface State extends IUserReducerParam {
  isLoaded: boolean;
}

const LoginInfoStateContext = createContext<IUserReducerParam | undefined>(
  undefined
);

const LoginInfoDispatchContext = createContext<Dispatch | undefined>(undefined);

function LoginInfoReducer(state: State, action: ActionType) {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        isLoaded: true,
        ...action.data,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isLoaded: true,
        isLoggedIn: false,
        userId: "",
        email: "",
        profile: "",
        name: "",
        part: "",
        imageUrl: "",
      };
    }
    default: {
      throw new Error("User Action Error");
    }
  }
}

function LoginInfoProvider({ children }: { children: ReactNode }) {
  const [state, dispath] = useReducer(LoginInfoReducer, {
    isLoggedIn: false,
    isLoaded: false,
    id: "",
    email: "",
    name: "",
    profile: "",
    part: "",
    introduction: "",
    githubAddress: "",
    instagramId: "",
    imageUrl: "",
  });

  return (
    <LoginInfoDispatchContext.Provider value={dispath}>
      <LoginInfoStateContext.Provider value={state}>
        {children}
      </LoginInfoStateContext.Provider>
    </LoginInfoDispatchContext.Provider>
  );
}

function useLoginInfoState() {
  const context = useContext(LoginInfoStateContext);
  if (context === undefined) {
    throw new Error("Login user info state context error");
  }
  return context;
}

function useLoginInfoDispatch() {
  const context = useContext(LoginInfoDispatchContext);
  if (context === undefined) {
    throw new Error("Login user info dispatch context error");
  }
  return context;
}

export { LoginInfoProvider, useLoginInfoState, useLoginInfoDispatch };
