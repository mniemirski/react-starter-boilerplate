import { authMutations } from './auth/authActions.mutations';
import { authQueries } from './auth/authActions.queries';

export const queries = {
  ...authQueries,
} as const;

export type AxiosQueriesType = typeof queries;

export type AxiosInfiniteQueriesType = Pick<AxiosQueriesType, 'getUsersInfinite'>;

export const mutations = {
  ...authMutations,
} as const;

export type AxiosMutationsType = typeof mutations;
