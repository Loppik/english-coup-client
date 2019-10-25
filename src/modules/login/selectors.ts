import { createSelector } from 'reselect';
import { IUserTokens } from '@mdl/login/interfaces';

const userTokensDomain = state => state.data.userTokens;

export const selectUserTokens = createSelector(
  [userTokensDomain],
  (userTokens: IUserTokens) => userTokens && userTokens.data
);

export const selectIsUserTokensError = createSelector(
  [userTokensDomain],
  (userTokens: IUserTokens) => userTokens && userTokens.isError
);
