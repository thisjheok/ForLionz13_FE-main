export interface IAuth {
  accessToken: string;
  refreshToken: string;
  id: number;
  count: number;
  grantType: string;
  accessTokenExpiresIn: string;
}
