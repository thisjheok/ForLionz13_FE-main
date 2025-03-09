import { IUserInfo } from "./User";

export interface ISuccessAsync<T = null> {
  isError: boolean;
  data: T;
}

export interface IReducerParam<T> {
  isloading?: boolean;
  data?: T;
  type: "" | "ISLOADING" | "SUCCESS" | "FAILURE";
  error?: string;
  params?: any[];
}

export interface IReducer<T> {
  (state: IReducerParam<T>, action: IReducerParam<T>): IReducerParam<T>;
}

export type IResponse<T = null> = Promise<ISuccessAsync<T>>;

export interface IUserReducerParam extends IUserInfo {
  isLoggedIn: boolean;
}

export interface IUserLoginAction {
  type: "LOGIN";
  data: IUserReducerParam;
}

export interface IUserLogoutAction {
  type: "LOGOUT";
}

export interface IUserReducer {
  (state: IUserReducerParam, action: IUserReducerParam): IUserReducerParam;
}
